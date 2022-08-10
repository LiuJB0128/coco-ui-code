<demo>
加载中状态
</demo>
<template>
  <Button loading>Loading</Button>
  <Button loading></Button>
  <Button :loading="Loading" @click="enterLoading">Enter Loading</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button},
  setup(){
    const Loading = ref<boolean>(false);
    const enterLoading = () => {
      Loading.value = !Loading.value;

      setTimeout(() => {
        Loading.value = false;
      }, 3000);
    };
    return {
      Loading,
      enterLoading,
    };
  }
};
</script>