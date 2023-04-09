<demo>
箭头指向：箭头指向位置
</demo>
<template>
  <Tooltip placement="topLeft" title="Prompt Text">
    <Button>Align Left Edge / 左边缘对齐</Button>
  </Tooltip>
  <Tooltip placement="topRight" title="Prompt Text">
    <Button>Align Right Edge / 右边缘对齐</Button>
  </Tooltip>
</template>
<script setup lang="ts">
import {Tooltip, Button} from '../lib/index';
</script>