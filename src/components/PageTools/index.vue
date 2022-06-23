<!--
 * @Author: luo_h603
 * @Date: 2022-06-23 15:48:51
 * @LastEditTime: 2022-06-23 16:58:23
 * @LastEditors: luo_h603
 * @Description: 封装工具栏
 * God help those who help themselves
-->
<template>
  <el-card class="page-tools">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col>
        <div v-if="showLeft">
          <!-- 左边插槽 -->
          <i class="el-icon-info"></i>
          <span style="margin-left: 5px">
            <slot name="left"></slot>
          </span>
        </div>
      </el-col>
      <el-col>
        <el-row type="flex" justify="end">
          <!-- 左边插槽 -->
          <slot name="right"></slot>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    // 控制显示隐藏
    showLeft: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.page-tools {
  margin: 10px 0;
  .before {
    line-height: 34px;
    i {
      margin-right: 5px;
      color: #409eff;
    }
    display: inline-block;
    padding: 0px 10px;
    border-radius: 3px;
    border: 1px solid rgba(145, 213, 255, 1);
    background: rgba(230, 247, 255, 1);
  }
}
</style>
