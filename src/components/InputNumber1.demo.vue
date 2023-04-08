<demo>
基础用法：数字输入框
</demo>
<template>
  <InputNumber v-model:value="value" :max="10" :min="1"/> 当前值：{{value}}
</template>

<script setup lang="ts">
import {InputNumber} from '../lib/index';
import {ref} from 'vue';
const value = ref(3)
</script>