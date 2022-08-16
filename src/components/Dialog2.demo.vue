<demo>
确认对话框：调用函数可以快捷地弹出确认框
</demo>
<template>
  <Button @click="showConfirm">Confirm</Button>
</template>

<script lang="ts">
import {h} from 'vue';
import {Button, confirm} from '../lib/index';

export default {
  components: {Button},
  setup() {
    const showConfirm = () => {
      confirm({
        title: 'Confirm',
        content: h('div', {style: 'color: red'}, 'Some descriptions'),
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      });
    };
    return {
      showConfirm
    };
  }
};
</script>