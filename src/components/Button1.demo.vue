<demo>
按钮类型：主按钮、次按钮、虚线按钮、链接按钮和文本按钮
</demo>
<template>
  <Button theme="primary">Primary Button</Button>
  <Button>Default Button</Button>
  <Button theme="dashed">Dashed Button</Button>
  <br/>
  <Button theme="link">Link Button</Button>
  <Button theme="text">Text Button</Button>
</template>

<script lang="ts">
import {Button} from '../lib/index';

export default {
  components: {Button}
};
</script>