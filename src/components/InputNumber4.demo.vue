<demo>
不可用：点击按钮切换可用状态
</demo>
<template>
  <InputNumber v-model:value="value" :min="1" :max="100" :disabled="disabled"/>

  <div style="width: 100%"/>

  <Button theme="primary" @click="toggle">Toggle Disabled</Button>

</template>
<script setup lang="ts">
import {Button, InputNumber} from '../lib/index';
import {ref} from 'vue';

const value = ref(3);
const disabled = ref(true);
const toggle = () => {
  disabled.value = !disabled.value;
}
</script>