<demo>
国际化：自定义按钮文字
</demo>
<template>
  <Button theme="primary" @click="showDialog">Dialog</Button>
  <Button @click="showConfirm">Confirm</Button>
  <Dialog v-model:visible="visible" :close-on-click-overlay="true" :ok="handleOk" :cancel="handleCancel">
    <template v-slot:title>
      <strong>Title</strong>
    </template>
    <template v-slot:content>
      <p>Some contents...</p>
    </template>
    <template #okText>OK</template>
    <template #cancelText>Cancel</template>
  </Dialog>
</template>

<script lang="ts">
import {h, ref} from 'vue';
import {Button, confirm, Dialog} from '../lib/index';

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