<!--
 * @Author: luo_h603
 * @Date: 2022-06-27 15:05:52
 * @LastEditTime: 2022-06-28 16:29:22
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
      <el-select
        v-model="currentMonth"
        size="mini"
        style="width: 120px; margin-left: 20px"
      >
        <el-option
          v-for="(item, index) in 12"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-row>
    <el-calendar v-model="currentDate">
      <template v-slot:dateCell="{ date, data }">
        <div class="date-content">
          <span class="text"> {{ data.day | getDay }}</span>
          <span v-if="isWeek(date)" class="rest">休</span>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  filters: {
    getDay(value) {
      const day = value.split("-")[2];
      // 以0开头的数字，有的截掉0，否者返回day
      return day.startsWith("0") ? day.substr(1) : day;
    },
  },
  props: {
    startDate: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    return {
      yearList: [], //遍历年数组
      currentYear: null, // 当年年份
      currentMonth: null, //当前月份
      currentDate: null, //当前日期
    };
  },
  created() {
    this.currentYear = this.startDate.getFullYear(); // 当前年份
    this.currentMonth = this.startDate.getMonth() + 1; // 当前月份
    // console.log(this.currentYear);
    this.yearList = Array.from(Array(11), (v, k) => k + this.currentYear - 5); // 快速生成数组方法
    this.dateChange(); // 计算 当年当月的第一个周一 再加上 四周之后的一个月月份
  },
  methods: {
    // 是否是休息日
    isWeek(date) {
      return date.getDay() === 6 || date.getDay() === 0;
    },
    // 年月份改变之后
    dateChange() {
      const year = this.currentYear;
      const month = this.currentMonth;
      this.currentDate = new Date(`${year}-${month}-1`); // 以当前月的1号为起始
    },
  },
};
</script>

<style scope>
.el-calendar__header {
  display: none;
  border-bottom: 1px solid #ebeef5;
}
.el-calendar {
  margin-top: 20px;
  border-top: 1px solid #ebeef5;
}
/deep/ .el-calendar-day {
  height: auto;
}
/deep/ .el-calendar-table__row td,
/deep/ .el-calendar-table tr td:first-child,
/deep/ .el-calendar-table__row td.prev {
  border: none;
}
.date-content {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text {
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
}
/deep/ .el-calendar-table td.is-selected .text {
  background: #409eff;
  color: #fff;
  border-radius: 50%;
}
/deep/ .el-calendar__header {
  display: none;
}
</style>
