<demo>
居中：标签居中展示
</demo>
<template>
  <Tabs v-model:selected="selected" position="centered">
    <Tab title="Tab 1">Content of Tab Pane 1</Tab>
    <Tab title="Tab 2">Content of Tab Pane 2</Tab>
    <Tab title="Tab 3">Content of Tab Pane 3</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tab, Tabs} from '../lib/index';
import {ref} from 'vue';

export default {
  components: {
    Tabs, Tab
  },
  setup() {
    const selected = ref('Tab 1');
    return {selected};
  }
};
</script>