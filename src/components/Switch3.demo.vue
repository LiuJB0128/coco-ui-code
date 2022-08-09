<demo>
加载中：标识开关操作仍在执行中
</demo>
<template>
  <Switch v-model:value="bool" loading disabled/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {
    Switch
  },
  setup() {
    const bool = ref(true);
    return {
      bool
    };
  }
};
</script>