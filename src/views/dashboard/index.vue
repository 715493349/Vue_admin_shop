<!--
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-23 17:05:02
 * @LastEditors: luo_h603
 * @Description: 
 * God help those who help themselves
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: 管理员</div>
    <pageTools :showLeft="true">
      <template v-slot:left>
        <el-button type="success" size="small" plain>我想你了</el-button>
        <el-button type="success" size="small" plain>我想你了</el-button>
        <el-button type="success" size="small" plain>我想你了</el-button>
        <el-button type="success" size="small" plain>我想你了</el-button>
        <el-button type="success" size="small" plain>我想你了</el-button>
        <el-button type="success" size="small" plain>我想你了</el-button>
        <el-button type="success" size="small" plain>我想你了</el-button>
        <el-button type="success" size="small" plain>我想你了</el-button>
      </template>
      <!-- <span slot="left">dadadsadsadsadsadsadsadsa</span> -->
      <template v-slot:right>
        <el-button type="primary">老婆大人</el-button>
      </template>
      <!-- <el-button slot="right" type="primary">导入Excel</el-button> -->
    </pageTools>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  // 组件
  components: {
    pageTools: () => import("@/components/PageTools"),
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
