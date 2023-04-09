<template>
  <div class="coco-tooltip" :title="title">
    <slot/>
  </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
  title: String
});
</script>
<style lang="scss">
$tooltip-bg: #404040;
.coco-tooltip {
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    border-width: 4px 6px 0 6px;
    border-style: solid;
    border-color: transparent;
    border-top-color: $tooltip-bg;
    z-index: 99;
    opacity: 0;

    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    content: attr(title);
    position: absolute;
    background: $tooltip-bg;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    padding: 8px 8px;
    min-width: 80px;
    pointer-events: none;
    z-index: 99;
    opacity: 0;

    left: 50%;
    top: -10px;
    transform: translateX(-50%) translateY(-100%);
  }

  &:hover::after, &:hover::before {
    opacity: 1;
  }
}
</style>