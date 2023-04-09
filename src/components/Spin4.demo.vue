<demo>
自定义描述文案
</demo>
<template>
  <div class="example">
    <Spin tip="Loading..."/>
  </div>
</template>
<script setup lang="ts">
import {Spin} from '../lib/index';
</script>
<style scoped>
.example {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 30px 50px;
  margin: 20px 0;
}
</style>