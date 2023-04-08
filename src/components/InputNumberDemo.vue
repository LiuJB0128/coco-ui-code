<template>
  <div>
    <h1>InputNumber 数字输入框</h1>
    <p>通过鼠标或键盘，输入范围内的数值。</p>
    <h2>代码演示</h2>
    <Demo :component="InputNumber1Demo"/>
    <Demo :component="InputNumber2Demo"/>
    <Demo :component="InputNumber3Demo"/>
  </div>
</template>

<script setup lang="ts">
import Demo from './Demo.vue';
import InputNumber1Demo from './InputNumber1.demo.vue';
import InputNumber2Demo from './InputNumber2.demo.vue';
import InputNumber3Demo from './InputNumber3.demo.vue';
</script>

<style lang="scss" scoped>
p {
  margin: 20px 0 40px 0;
  font-size: 18px;
  font-weight: 500;
}
</style>