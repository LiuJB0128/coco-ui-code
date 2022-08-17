<demo>
基础用法：普通的对话框
</demo>
<template>
  <Button theme="primary" @click="showDialog">Open Dialog</Button>
  <Dialog v-model:visible="visible" :ok="handleOk" :cancel="handleCancel">
    <template v-slot:title>
      <strong>Title</strong>
    </template>
    <template v-slot:content>
      <p>Some contents...</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {Button, Dialog} from '../lib/index';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const visible = ref(false);
    const showDialog = () => {
      visible.value = !visible.value;
    };
    const handleOk = () => {
      console.log('ok');
      return true;
    };
    const handleCancel = () => {
      console.log('cancel');
    };
    return {
      visible, handleOk, handleCancel, showDialog
    };
  }
};
</script>