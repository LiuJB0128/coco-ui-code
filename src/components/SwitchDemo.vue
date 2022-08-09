<template>
  <div>
    <h1>Switch 开关</h1>
    <p>需要表示开关状态/两种状态之间的切换时的选择器。</p>
    <h2>代码演示</h2>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
    <Demo :component="Switch3Demo"/>
  </div>
</template>
<script lang="ts">
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Switch3Demo from './Switch3.demo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
      Switch3Demo
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