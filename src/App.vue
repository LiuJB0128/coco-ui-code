<template>
  <router-view/>
</template>

<script lang="ts">

import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 720);
    provide('asideVisible', asideVisible);
    router.afterEach(() => {
      if (width <= 720) {
        asideVisible.value = false;
      }
    });
  }
};
</script>
