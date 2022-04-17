<template>
  <router-view/>
</template>

<script lang="ts">

import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    // noinspection RedundantConditionalExpressionJS
    const asideVisible = ref(width <= 720 ? false : true);
    provide('asideVisible', asideVisible);
  }
};
</script>
