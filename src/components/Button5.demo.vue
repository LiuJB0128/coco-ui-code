<demo>
加载中状态
</demo>
<template>
  <Button loading>Loading</Button>
  <Button loading></Button>
  <Button :loading="loading" @click="enterLoading">Enter Loading</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button},
  setup() {
    const loading = ref<boolean>(false);
    const enterLoading = () => {
      loading.value = !loading.value;

      setTimeout(() => {
        loading.value = false;
      }, 3000);
    };
    return {
      loading, enterLoading
    };
  }
};
</script>
