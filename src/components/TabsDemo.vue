<template>
  <div>
    <h1>Tabs 标签页</h1>
    <p>选项卡切换组件。</p>
    <h2>代码演示</h2>
    <Demo :component="Tabs1Demo"/>
    <Demo :component="Tabs2Demo"/>
    <Demo :component="Tabs3Demo"/>
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue';
import Tabs2Demo from './Tabs2.demo.vue';
import Tabs3Demo from './Tabs3.demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo, Tabs2Demo, Tabs3Demo
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