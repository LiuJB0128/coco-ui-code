<demo>
禁用状态
</demo>
<template>
  <Button disabled>禁用按钮</Button>
  <Button level="danger" disabled>Danger</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>