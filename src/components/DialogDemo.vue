<template>
  <div>
    <h1>Dialog 对话框</h1>
    <p>需要表示开关状态/两种状态之间的切换时的选择器。</p>
    <h2>代码演示</h2>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
    };
  }
};
</script>
<style lang="scss" scoped>
p {
  margin: 20px 0 40px 0;
  font-size: 18px;
  font-weight: 500;
}
</style>