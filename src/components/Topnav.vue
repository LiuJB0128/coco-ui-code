<template>
  <div class="topnav">
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-Coconut"></use>
      </svg>
      <span class="text">Coco UI</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  background: #ffffff;
  display: flex;
  padding: 16px 16px 16px 40px;
  position: relative;
  z-index: 20;
  box-shadow: 0 0 1px black;
  @media (max-width: 720px) {
    padding: 16px;
  }

  > .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      height: 24px;
      width: 24px;
    }

    .text {
      padding-left: 8px;
      font-size: 16px;
      font-weight: 500;
      color: inherit;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    list-style: none;

    > li {
      margin: 0 1em;

      > a {
        font-weight: 500;
        color: #2c3e50;
      }
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    display: none;
  }

  @media (max-width: 720px) {
    > .menu {
      display: none
    }
    > .logo {
      margin: 0 auto 0 10px;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>