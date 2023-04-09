<template>
  <div>
    <h1>Tooltip 文字提示</h1>
    <p>警告提示，展现需要关注的信息。</p>
    <h2>代码演示</h2>
    <Demo :component="Tooltip1Demo"/>
    <Demo :component="Tooltip2Demo"/>
    <Demo :component="Tooltip3Demo"/>
  </div>
</template>
<script setup lang="ts">
import Demo from './Demo.vue';
import Tooltip1Demo from './Tooltip1.demo.vue';
import Tooltip2Demo from './Tooltip2.demo.vue';
import Tooltip3Demo from './Tooltip3.demo.vue';
</script>
<style lang="scss" scoped>
p {
  margin: 20px 0 40px 0;
  font-size: 18px;
  font-weight: 500;
}
</style>