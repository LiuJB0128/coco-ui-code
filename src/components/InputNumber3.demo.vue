<demo>
无边框：没有边框
</demo>
<template>
  <InputNumber v-model:value="value" :min="1" :max="100" :borderless="true"/>
</template>
<script setup lang="ts">
import {InputNumber} from '../lib/index';
import {ref} from 'vue';
const value = ref(3)
</script>