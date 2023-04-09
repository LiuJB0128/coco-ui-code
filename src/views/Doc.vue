<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <aside :class="{visible:!asideVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/doc/input-number">InputNumber 数字输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/tooltip">Tooltip 文字提示</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <div class="coco-layout-overlay" @click="onClickOverlay" v-if="!asideVisible"></div>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const onClickOverlay = () => {
      asideVisible.value = true;
    };
    return {asideVisible, onClickOverlay};
  }
};
</script>
<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;

  > .nav {
    flex-shrink: 0;
    position: sticky;
    top: 0;
    width: 100%;
  }

  > .content {
    width: 100%;
    flex-grow: 1;
  }
}

.content {
  display: flow-root;

  .coco-layout-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    opacity: 0;
    z-index: 9;
    @media (min-width: 720px) {
      width: 0;
      height: 0;
    }
  }

  > aside {
    position: fixed;
    left: 0;
  }

  > main {
    background: #fff;
    padding: 16px 36px 16px 356px;
    @media (max-width: 720px) {
      padding: 16px;
    }
  }
}

aside {
  border-right: 1px solid #BDBDBD;
  background: #ffffff;
  width: 320px;
  height: 100%;
  z-index: $aside-index;
  @media (max-width: 720px) {
    width: 220px;
    transform: translateX(-100%);
    transition: transform .2s ease;
    &.visible {
      transform: translateX(0px);
    }
  }

  > h2 {
    font-size: 18px;
    margin: 16px 0;
    padding: 8px 16px 8px 40px;
    white-space: nowrap;
    @media (max-width: 720px) {
      padding: 8px 16px;
    }

    &::after {
      display: block;
      position: relative;
      top: 16px;
      content: '';
      border-bottom: 1px solid #BDBDBD;
    }
  }

  > ol {
    > li {
      > a {
        font-size: 16px;
        display: block;
        padding: 9px 16px 9px 40px;
        text-decoration: none;
        @media (max-width: 720px) {
          padding: 9px 16px;
        }

        &:hover {
          color: #5FBC90;
        }
      }

      .router-link-active {
        color: #5FBC90;
        font-weight: 600;
        border-left: 4px solid #5FBC90;
      }
    }
  }

  main {
    overflow: auto;
  }
}
</style>