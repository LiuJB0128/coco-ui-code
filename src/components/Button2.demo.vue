<demo>
三种尺寸："size = big | normal | small"
</demo>
<template>
  <Button theme="primary" size="big">Primary</Button>
  <Button size="big">Default</Button>
  <Button theme="dashed" size="big">Dashed</Button>
  <br/>
  <Button theme="primary">Primary</Button>
  <Button>Default</Button>
  <Button theme="dashed">Dashed</Button>
  <br/>
  <Button theme="primary" size="small">Primary</Button>
  <Button size="small">Default</Button>
  <Button theme="dashed" size="small">Dashed</Button>
</template>

<script lang="ts">
import {Button} from '../lib/index';

export default {
  components: {Button}
};
</script>