<template>
  <div class="topnav">
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-Coconut"></use>
      </svg>
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

  > .logo {
    display: inline-block;
    max-width: 6em;
    margin-right: auto;

    > svg {
      height: 24px;
      width: 24px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

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