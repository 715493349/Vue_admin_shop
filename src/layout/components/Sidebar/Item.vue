<!--
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-22 19:00:58
 * @LastEditors: luo_h603
 * @Description: 
 * God help those who help themselves
-->
<script>
export default {
  name: "MenuItem",
  // functional为true，表示该组件为一个函数式组件
  // 函数式组件： 没有data状态，没有响应式数据，只会接收props属性， 没有this， 他就是一个函数
  functional: true,
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];

    if (icon) {
      if (icon.includes("el-icon")) {
        vnodes.push(<i class={[icon, "sub-el-icon"]} />);
      } else {
        vnodes.push(<svg-icon icon-class={icon} />);
      }
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
