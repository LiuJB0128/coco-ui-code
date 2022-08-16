<demo>
自定义页脚：自定义页脚按钮
</demo>
<template>
  <Button theme="primary" @click="showDialog">Open Dialog with customized footer</Button>
  <Dialog v-model:visible="visible" :close-on-click-overlay="true">
    <template v-slot:title>
      <strong>Title</strong>
    </template>
    <template v-slot:content>
      <p>Some contents...</p>
    </template>
    <template #footer>
      <Button level="danger" @click="handleCancel">Cancel</Button>
      <Button theme="dashed" :loading="loading" @click="handleOk">OK</Button>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {Button, Dialog} from '../lib/index';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const loading = ref(false);
    const visible = ref(false);
    const showDialog = () => {
      visible.value = !visible.value;
    };
    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 2000);
    };
    const handleCancel = () => {
      visible.value = false;
    };
    return {
      visible, handleOk, handleCancel, showDialog, loading
    };
  }
};
</script>