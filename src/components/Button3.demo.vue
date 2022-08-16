<demo>
危险按钮
</demo>
<template>
  <Button theme="primary" level="danger">Primary</Button>
  <Button level="danger">Default</Button>
  <Button theme="dashed" level="danger">Dashed</Button>
  <Button theme="link" level="danger">Link</Button>
  <Button theme="text" level="danger">Text</Button>
</template>

<script lang="ts">
import {Button} from '../lib/index';

export default {
  components: {Button}
};
</script>