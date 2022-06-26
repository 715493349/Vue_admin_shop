<!--
 * @Author: luo_h603
 * @Date: 2022-06-26 16:29:16
 * @LastEditTime: 2022-06-26 17:21:22
 * @LastEditors: luo_h603
 * @Description: 导入公共组件
 * God help those who help themselves
-->
<template>
  <div>
    <UploadExcel :on-success="success"></UploadExcel>
  </div>
</template>

<script>
import { importEmployee } from "@/api/employees";
export default {
  methods: {
    async success({ header, res }) {
      const userRelations = {
        入职日期: "timeOfEntry",
        手机号: "mobile",
        姓名: "username",
        转正日期: "correctionTime",
        工号: "workNumber",
      };
      // const arr = [];
      // res.forEach((item) => {
      //   const userInfo = {};
      //   Object.keys(item).forEach((key) => {
      //     userInfo[userRelations[key]] = item[key]; // 将对应的key值赋值给userInfo
      //   });
      //   arr.push(userInfo);
      //   console.log(Object.keys(item));
      // });

      var newArr = res.map((item) => {
        var newItem = {};
        Object.keys(item).forEach((key) => {
          if (
            userRelations[key] === "timeOfEntry" ||
            userRelations[key] === "correctionTime"
          ) {
            newItem[userRelations[key]] = new Date(
              this.formatDate(item[key], "/")
            );
          } else {
            newItem[userRelations[key]] = item[key];
          }
        });
        return newItem;
      });
      await importEmployee(newArr);
      this.$message.success("导入成功");
      this.$router, back(); //回到上一个页面
    },
    // 转换日期格式
    formatDate(numb, format) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1);
      time.setYear(time.getFullYear() - 70);
      const year = time.getFullYear() + "";
      const month = time.getMonth() + 1 + "";
      const date = time.getDate() - 1 + "";
      if (format && format.length === 1) {
        return year + format + month + format + date;
      }
      return (
        year +
        (month < 10 ? "0" + month : month) +
        (date < 10 ? "0" + date : date)
      );
    },
  },
};
</script>

<style></style>
