<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';
import {computed, ref} from 'vue';

export default {
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup: function (props) {
    const html = computed(() => {
      const {__sourceCode} = props.component;
      return Prism.highlight(__sourceCode, Prism.languages.html, 'html');
    });
    const toggleCode = () => codeVisible.value = !codeVisible.value;
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      toggleCode
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }

  .language-html {
    background: #f5f7fa;
  }
}
</style>