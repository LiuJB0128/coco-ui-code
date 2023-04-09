<demo>
多彩文字提示：我们添加了多种预设色彩的文字提示样式，用作不同场景使用
</demo>
<template>
  <Tooltip v-for="color in colors" :key="color" title="Prompt Text" :color="color">
    <Button>{{ color }}</Button>
  </Tooltip>
</template>
<script setup lang="ts">
import {Tooltip, Button} from '../lib/index';
const colors = [
  'pink',
  'red',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'magenta',
  'gold',
  'lime',
  '#f50',
  '#2db7f5',
  '#87d068',
  '#108ee9'
];
</script>