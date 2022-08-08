<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <span title="显示代码">
        <svg class="icon" @click="showCode" v-if="!codeVisible">
          <use xlink:href="#icon-fangdazhanshi"></use>
        </svg>
      </span>
      <span title="收起代码">
        <svg class="icon" @click="hideCode" v-if="codeVisible">
          <use xlink:href="#icon-mid-full"></use>
        </svg>
      </span>
      <span title="复制代码" @click="copy">
        <svg class="icon">
          <use xlink:href="#icon-fuzhi"></use>
        </svg>
      </span>
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
import useClipboard from 'vue-clipboard3'

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
    const showCode = () => codeVisible.value = true;
    const hideCode = () => codeVisible.value = false;
    const codeVisible = ref(false);
    const { toClipboard } = useClipboard()

    const copy = async () => {
      try {
        await toClipboard(props.component.__sourceCode)
        console.log('Copied to clipboard')
        alert('复制成功！')
      } catch (e) {
        console.error(e)
        alert('复制失败！')
      }
    }
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode,
      copy
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

    > span > svg {
      width: 16px;
      height: 16px;
      margin: 0 10px;
      cursor: pointer;
      opacity: 0.5;

      &:hover {
        opacity: 1;
        transform: scale(1.1);
        transition: all 240ms;
      }
    }
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