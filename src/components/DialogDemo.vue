<template>
  <div>
    <h1>Dialog 对话框</h1>
    <p>与用户交互的对话框。</p>
    <h2>代码演示</h2>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
    <Demo :component="Dialog3Demo"/>
    <Demo :component="Dialog4Demo"/>
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Dialog3Demo from './Dialog3.demo.vue';
import Dialog4Demo from './Dialog4.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
      Dialog3Demo,
      Dialog4Demo
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