<demo>
不同等级
</demo>
<template>
  <Button level="main">主要按钮</Button>
  <Button>普通按钮</Button>
  <Button level="danger">危险按钮</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>