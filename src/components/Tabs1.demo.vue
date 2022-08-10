<demo>
基础用法：默认选中第一项
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="Tab 1">Content of Tab Pane 1</Tab>
    <Tab title="Tab 2">Content of Tab Pane 2</Tab>
    <Tab title="Tab 3">Content of Tab Pane 3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
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