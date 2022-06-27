<!--
 * @Author: luo_h603
 * @Date: 2022-06-22 14:47:02
 * @LastEditTime: 2022-06-26 21:01:20
 * @LastEditors: luo_h603
 * @Description: 员工管理
 * God help those who help themselves
-->
<template>
  <div class="header-one">
    <div>
      <page-tools :show-left="true">
        <span slot="left" class="span-color">共{{ page.total }}条记录</span>
        <!-- <el-button type="success" size="small" plain slot="left"
          >共166条记录</el-button
        > -->
        <template slot="right">
          <el-button
            size="small"
            type="warning"
            plain
            @click="$router.push('/import')"
            >导入</el-button
          >
          <!-- 视频10.1开始 -->
          <el-button size="small" type="danger" plain>导出</el-button>
          <el-button
            size="small"
            type="primary"
            plain
            @click="showDialog = true"
            >新增员工</el-button
          >
        </template>
      </page-tools>
      <!-- 放置表格和分页 -->
      <el-card style="height: 820px">
        <el-table :data="list" v-loading="loading" border>
          <el-table-column
            label="序号"
            type="index"
            align="center"
            width="100"
            sortable
          />
          <el-table-column
            label="姓名"
            prop="username"
            align="center"
            sortable
            width=""
          />
          <el-table-column
            label="工号"
            prop="workNumber"
            align="center"
            sortable
            width=""
          />
          <el-table-column
            label="聘用形式"
            prop="formOfEmployment"
            align="center"
            :formatter="formatEmployment"
            sortable
            width=""
          />
          <el-table-column
            label="部门"
            prop="departmentName"
            align="center"
            width=""
          />
          <el-table-column
            label="入职时间"
            prop="timeOfEntry"
            align="center"
            sortable
            width=""
          >
            <template v-slot="obj">
              {{ obj.row.timeOfEntry | formatDate }}
            </template></el-table-column
          >
          <el-table-column
            label="账户状态"
            prop="enableState"
            align="center"
            sortable
            width=""
          >
            <template slot-scope="{ row }">
              <el-switch :value="row.enableState === 1" /> </template
          ></el-table-column>
          <el-table-column
            label="操作"
            fixed="right"
            width="280"
            align="center"
            sortable
          >
            <template slot-scope="scope">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small">角色</el-button>
              <el-button
                type="text"
                size="small"
                @click="delEmployee(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-row
          type="flex"
          justify="center"
          align="middle"
          style="height: 60px"
        >
          <el-pagination
            :current-page="page.page"
            :page-size="page.size"
            :total="page.total"
            @current-change="changePage"
            layout="prev, pager, next"
          />
        </el-row>
      </el-card>
    </div>
    <!-- 新增员工 -->
    <AddDemployee :showDialog.sync="showDialog" />
  </div>
</template>

<script>
import { getEmployeeList, deleteEmployee } from "@/api/employees";
import EmployeeEnum from "@/api/constant/employees";
import AddDemployee from "./components/add-emplotee.vue";
export default {
  name: "Employees",
  components: {
    AddDemployee,
  },
  data() {
    return {
      list: [],
      page: {
        page: 1,
        pagesize: 10,
        total: 0,
      },
      loading: false,
      showDialog: false,
    };
  },
  created() {
    this.getEmployeeList();
  },
  methods: {
    // 获取员工列表
    async getEmployeeList() {
      const { total, rows } = await getEmployeeList(this.page);
      this.page.total = total;
      this.list = rows;
    },
    // 分页改变时触发回调
    changePage(newPage) {
      this.page.page = newPage;
      this.getEmployeeList();
    },
    // 格式化聘用形式
    formatEmployment(row, column, cellValue) {
      const obj = EmployeeEnum.hireType.find((item) => item.id === cellValue);
      return obj ? obj.value : "未知";
    },
    // 删除员工
    async delEmployee(row) {
      try {
        await this.$confirm("您确定删除该员工吗");
        await delEmployee(id);
        this.getEmployeeList();
        this.$message.success("删除员工成功");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.span-color {
  border-radius: 3px;
  background-color: #6ce7aa4f;
}
</style>
