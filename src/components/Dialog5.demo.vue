<demo>
禁用点击遮罩层关闭对话框：默认允许
</demo>
<template>
  <Button theme="primary" @click="showDialog">Open Dialog</Button>
  <Button @click="showConfirm">Confirm</Button>
  <Dialog v-model:visible="visible" :close-on-click-overlay="false" :ok="handleOk" :cancel="handleCancel">
    <template v-slot:title>
      <strong>Title</strong>
    </template>
    <template v-slot:content>
      <p>Some contents...</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {Button, confirm, Dialog} from '../lib/index';
import {h, ref} from 'vue';

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
    const showConfirm = () => {
      confirm({
        title: 'Confirm',
        content: h('div', {style: 'color: red'}, 'Some descriptions'),
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        },
        closeOnClickOverlay: false,
        okText: 'OK',
        cancelText: 'Cancel'
      });
    };
    return {
      visible, handleOk, handleCancel, showDialog, showConfirm
    };
  }
};
</script>