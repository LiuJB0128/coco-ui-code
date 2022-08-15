<demo>
大小：大号页签用在页头区域，小号用在弹出框等较狭窄的容器内
</demo>
<template>
  <Tabs v-model:selected="selected" size="big">
    <Tab title="Tab 1">Content of Tab Pane 1</Tab>
    <Tab title="Tab 2">Content of Tab Pane 2</Tab>
    <Tab title="Tab 3">Content of Tab Pane 3</Tab>
  </Tabs>
  <hr style="margin: 15px 0"/>
  <Tabs v-model:selected="selected">
    <Tab title="Tab 1">Content of Tab Pane 1</Tab>
    <Tab title="Tab 2">Content of Tab Pane 2</Tab>
    <Tab title="Tab 3">Content of Tab Pane 3</Tab>
  </Tabs>
  <hr style="margin: 15px 0"/>
  <Tabs v-model:selected="selected" size="small">
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