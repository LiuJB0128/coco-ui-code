<template>
  <div>
    <Topnav/>
    <div class="banner">
      <svg class="icon">
        <use xlink:href="#icon-a-Coconuttree"></use>
      </svg>
      <h1>Coco UI</h1>
      <h2>一个有点好看的 UI 框架</h2>
      <p class="actions">
        <a class="github" href="">GitHub</a>
        <router-link to="/doc">起步</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-chuangyi-"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>
<style lang="scss" scoped>
@use "sass:math";

.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}

.banner {
  padding: 100px 0;
  display: grid;
  justify-content: center;
  grid-template-areas:
        "icon title"
        "icon text"
        "icon link";
  flex-direction: column;
  background: lightgreen;
  clip-path: ellipse(80% 60% at 50% 40%);

  > svg {
    grid-area: icon;
    height: 120px;
    width: 120px;
    margin-right: 30px;
  }

  > h1 {
    grid-area: title;
  }

  > h2 {
    grid-area: text;
  }

  > .actions {
    padding: 8px 0;
    grid-area: link;

    a {
      margin: 0 8px 0 0;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: math.div($h, 2);
      padding: 0 8px;
    }

    .github {
      color: #4f5959;
      background: #f6f6f6;
    }
  }
}
</style>