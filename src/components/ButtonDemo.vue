<template>
  <div>
    <h1>Button 按钮</h1>
    <p>按钮用于开始一个即时操作。</p>
    <h2>代码演示</h2>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
  </div>
</template>
<script lang="ts">
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';
import Demo from './Demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
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
