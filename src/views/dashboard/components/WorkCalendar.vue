<!--
 * @Author: luo_h603
 * @Date: 2022-06-27 15:05:52
 * @LastEditTime: 2022-06-27 17:20:39
 * @LastEditors: luo_h603
 * @Description: 工作日历
 * God help those who help themselves
-->
<template>
  <div>
    <el-row type="flex" justify="end">
      <el-select v-model="currentYear" size="mini" style="width: 120px">
        <el-option
          v-for="(item, index) in yearList"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
      <el-select size="mini" style="width: 120px; margin-left: 20px">
        <el-option
          v-for="(item, index) in 12"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    startDate: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
      yearList: [], //遍历年数组
      currentYear: null, // 当年年份
    };
  },
  created() {
    // this.initYearList();
    // 当前年份
    this.currentYear = this.startDate.getFullYear();
    // 快速生成数组方法
    this.yearList = Array.from(Array(11), (v, k) => k + this.currentYear - 5);
  },
  methods: {
    getFullYear() {},
  },
};
</script>

<style></style>
