<demo>
加载中状态
</demo>
<template>
  <Button theme="primary" loading>Primary</Button>
  <Button theme="primary" disabled loading>Primary</Button>

  <div style="width: 100%"/>

  <Button :loading="loading" @click="enterLoading">Enter Loading</Button>

  <div style="width: 100%"/>

  <Button theme="dashed" loading></Button>
  <Button theme="dashed" disabled loading></Button>

  <div style="width: 100%"/>

  <Button theme="primary" level="danger" loading>Danger</Button>
  <Button level="danger" loading>Default</Button>
</template>

<script lang="ts">
import {Button} from '../lib/index';
import {ref} from 'vue';

export default {
  components: {Button},
  setup() {
    const loading = ref(false);
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