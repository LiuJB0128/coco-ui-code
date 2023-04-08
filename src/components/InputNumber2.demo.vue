<demo>
三种大小：三种大小的数字输入框
</demo>
<template>
  <InputNumber v-model:value="value1" size="large" :min="1" :max="10000"/>
  <InputNumber v-model:value="value2" :min="1" :max="10000"/>
  <InputNumber v-model:value="value3" size="small" :min="1" :max="10000"/>
</template>
<script setup lang="ts">
import {InputNumber} from '../lib/index';
import {ref} from 'vue';
const value1 = ref(3)
const value2 = ref(3)
const value3 = ref(3)
</script>