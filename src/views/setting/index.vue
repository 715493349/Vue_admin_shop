<!--
 * @Author: luo_h603
 * @Date: 2022-06-22 14:47:02
 * @LastEditTime: 2022-06-24 09:22:31
 * @LastEditors: luo_h603
 * @Description: 公司设置
 * God help those who help themselves
-->
<template>
  <div class="header-one">
    <el-card style="height: 900px">
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <el-row style="height: 60px; line-height: 60px">
            <el-button
              class="add_btn"
              type="primary"
              icon="el-icon-plus"
              size="small"
              @click="showDialog = true"
              >新增角色</el-button
            >
          </el-row>
          <el-table
            :data="list"
            style="margin: 10px"
            border
            stripe
            align="center"
          >
            <el-table-column
              type="index"
              label="序号"
              width="100"
              align="center"
            />
            <el-table-column prop="name" label="名称" width="" align="center" />
            <el-table-column
              prop="description"
              label="描述"
              width=""
              align="center"
            />
            <el-table-column label="操作" width="" align="center">
              <template slot-scope="scope">
                <el-button size="small" type="success" plain
                  >分配权限</el-button
                >
                <el-button
                  size="small"
                  type="primary"
                  plain
                  @click="editRole(scope.row.id)"
                  >编辑</el-button
                >
                <el-button
                  size="small"
                  type="danger"
                  plain
                  @click="deleteRole(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-row
            type="flex"
            justify="center"
            align="middle"
            style="height: 60px"
          >
            <el-pagination
              :current-page.sync="page.page"
              :page-size="page.pagesize"
              :total="page.total"
              @current-change="changePage"
              layout="prev,pager,next"
            />
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="warning"
            show-icon
            :closable="false"
          />
          <el-form label-width="160px" style="margin-top: 20px">
            <el-form-item label="公司名称">
              <el-input v-model="company.name" disabled style="width: 400px" />
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input
                v-model="company.address"
                disabled
                style="width: 400px"
              />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="company.email" disabled style="width: 400px" />
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                v-model="company.remark"
                type="textarea"
                :rows="3"
                disabled
                style="width: 400px"
              />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 编辑对话框 -->
    <el-dialog title="编辑" :visible.sync="showDialog" @close="btnCancel">
      <el-form
        ref="roleForm"
        :model="roleForm"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="roleForm.name" />
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="roleForm.description" />
        </el-form-item>
      </el-form>
      <!-- 底部 -->
      <el-row slot="footer" type="flex" justify="center">
        <el-col :span="6">
          <el-button size="small" @click="btnCancel">取消</el-button>
          <el-button size="small" type="primary" @click="submit"
            >确定</el-button
          >
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import {
  getRoleList,
  deleteRole,
  getRoleDetail,
  updateRole,
  addRole,
} from "@/api/setting";
import { mapGetters } from "vuex";

export default {
  name: "Setting",
  data() {
    return {
      list: [], // 接收角色列表数据
      page: {
        page: 1,
        pagesize: 10,
        total: 0,
      },
      // 公司信息
      company: {
        name: "恒恒国际军火交易批发有限公司",
        address: "中华人民共和国天宫空间站梦天实验2号舱",
        email: "715493349@qq.com",
        remark: "合作联系人：法外狂徒-张三",
      },
      activeName: "first",
      showDialog: false, //对话框切换
      roleForm: {}, // 接收新增或者编辑的编辑的表单数据
      rules: {
        name: [
          { required: true, message: "角色名称不能为空", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getRoleList(); // 获取角色列表
  },
  computed: {
    ...mapGetters(["companyInfo"]),
  },
  methods: {
    // 获取角色列表
    async getRoleList() {
      const { total, rows } = await getRoleList(this.page);
      this.page.total = total;
      this.list = rows;
    },
    // 分页点击触发事件
    changePage(newPage) {
      this.page.page = newPage;
      this.getRoleList();
    },
    // 删除按钮
    async deleteRole(id) {
      try {
        await this.$confirm("确定删除该角色吗？");
        await deleteRole(id);
        this.getRoleList();
        this.$message.success("删除角色成功");
      } catch (error) {
        this.$message.error("删除角色失败");
      }
    },
    // 编辑
    async editRole(id) {
      let res = await getRoleDetail(id);
      console.log(res);
      this.roleForm = res;
      this.showDialog = true;
    },
    // 对话框确定按钮预校验
    async submit() {
      try {
        await this.$refs.roleForm.validate();
        // 校验通过执行下面代码
        if (this.roleForm.id) {
          await updateRole(this.roleForm);
          this.$message.success("修改角色成功");
        } else {
          // 添加角色
          await addRole(this.roleForm);
          this.$message.success("添加角色成功");
        }
        this.btnCancel();
        this.getRoleList();
        this.showDialog = false;
      } catch (error) {
        this.$message.error("请填写完整");
      }
    },
    // 对话框取消按钮
    btnCancel() {
      this.roleForm = {
        name: "",
        description: "",
      };
      this.$refs.roleForm.resetFields();
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
.add_btn {
  margin-left: 10px;
}
</style>
