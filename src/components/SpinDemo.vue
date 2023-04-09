<template>
  <div>
    <h1>Spin 加载中</h1>
    <p>用于页面和区块的加载中状态。</p>
    <h2>代码演示</h2>
    <Demo :component="Spin1Demo"/>
    <Demo :component="Spin2Demo"/>
    <Demo :component="Spin3Demo"/>
  </div>
</template>
<script setup lang="ts">
import Demo from './Demo.vue';
import Spin1Demo from './Spin1.demo.vue';
import Spin2Demo from './Spin2.demo.vue';
import Spin3Demo from './Spin3.demo.vue';

</script>
<style lang="scss" scoped>
p {
  margin: 20px 0 40px 0;
  font-size: 18px;
  font-weight: 500;
}
</style>