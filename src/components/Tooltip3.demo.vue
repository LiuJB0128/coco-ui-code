<demo>
位置：共 12 个方向
</demo>
<template>
  <Tooltip placement="topLeft" title="Prompt Text">
    <Button>TL</Button>
  </Tooltip>
  <Tooltip title="Prompt Text">
    <Button>Top</Button>
  </Tooltip>
  <Tooltip placement="topRight" title="Prompt Text">
    <Button>TR</Button>
  </Tooltip>

  <Tooltip placement="leftTop" title="Prompt Text">
    <Button>LT</Button>
  </Tooltip>
  <Tooltip placement="left" title="Prompt Text">
    <Button>Left</Button>
  </Tooltip>
  <Tooltip placement="leftBottom" title="Prompt Text">
    <Button>LB</Button>
  </Tooltip>

  <div style="width: 100%"/>

  <Tooltip placement="rightTop" title="Prompt Text">
    <Button>RT</Button>
  </Tooltip>
  <Tooltip placement="right" title="Prompt Text">
    <Button>Right</Button>
  </Tooltip>
  <Tooltip placement="rightBottom" title="Prompt Text">
    <Button>RB</Button>
  </Tooltip>

  <Tooltip placement="bottomLeft" title="Prompt Text">
    <Button>BL</Button>
  </Tooltip>
  <Tooltip placement="bottom" title="Prompt Text">
    <Button>Bottom</Button>
  </Tooltip>
  <Tooltip placement="bottomRight" title="Prompt Text">
    <Button>BR</Button>
  </Tooltip>
</template>
<script setup lang="ts">
import {Button, Tooltip} from '../lib/index';
</script>