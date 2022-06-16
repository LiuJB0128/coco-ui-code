<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>Coco UI</h1>
      <h2>一个有点好看的 UI 框架</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <router-link to="/doc">起步</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-chuangyi-"></use>
    </svg>
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
  > svg {
    width: 64px;
    height: 64px;
  }
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  clip-path: ellipse(80% 60% at 50% 40%);


  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: math.div($h, 2);
      padding: 0 8px;
    }
  }
}
</style>