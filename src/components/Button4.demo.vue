<demo>
不可用状态：按钮无法使用
</demo>
<template>
  <Button theme="primary">Primary</Button>
  <Button theme="primary" disabled>Primary</Button>

  <div style="width: 100%"></div>

  <Button>Default</Button>
  <Button disabled>Default</Button>

  <div style="width: 100%"></div>

  <Button theme="dashed">Dashed</Button>
  <Button theme="dashed" disabled>Dashed</Button>

  <div style="width: 100%"></div>

  <Button theme="primary" level="danger">Danger</Button>
  <Button theme="primary" level="danger" disabled>Danger</Button>
</template>

<script lang="ts">
import {Button} from '../lib/index';

export default {
  components: {Button}
};
</script>