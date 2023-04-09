<template>
  <div class="coco-tooltip" :title="title" :position="placement">
    <slot/>
  </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
  title: String,
  placement: String,
  color: String
});

const setColor = props.color || '#404040';
</script>
<style lang="scss">
$tooltip-bg: v-bind(setColor);
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
    min-width: 100px;
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

  &[position='topLeft']::before {
    left: 15%;
  }

  &[position='topLeft']::after {
    left: 25%;
  }

  &[position='topRight']::before {
    left: 85%;
  }

  &[position='topRight']::after {
    left: 75%;
  }

  &[position='left']::before {
    top: 50%;
    left: 0;
    margin-left: -15px;
    transform: translateY(-50%) rotate(-90deg);
  }

  &[position='left']::after {
    top: 50%;
    left: 0;
    margin-left: -10px;
    transform: translateY(-50%) translateX(-100%);
  }

  &[position='leftTop']::before {
    top: 15%;
    left: 0;
    margin-left: -15px;
    transform: translateY(-50%) rotate(-90deg);
  }

  &[position='leftTop']::after {
    top: 25%;
    left: 0;
    margin-left: -10px;
    transform: translateY(-50%) translateX(-100%);
  }

  &[position='leftBottom']::before {
    top: 85%;
    left: 0;
    margin-left: -15px;
    transform: translateY(-50%) rotate(-90deg);
  }

  &[position='leftBottom']::after {
    top: 75%;
    left: 0;
    margin-left: -10px;
    transform: translateY(-50%) translateX(-100%);
  }

  &[position='right']::before {
    top: 50%;
    left: 100%;
    margin-left: 3px;
    transform: translateY(-50%) rotate(90deg);
  }

  &[position='right']::after {
    top: 50%;
    left: 100%;
    margin-left: 10px;
    transform: translateY(-50%);
  }

  &[position='rightTop']::before {
    top: 15%;
    left: 100%;
    margin-left: 3px;
    transform: translateY(-50%) rotate(90deg);
  }

  &[position='rightTop']::after {
    top: 25%;
    left: 100%;
    margin-left: 10px;
    transform: translateY(-50%);
  }

  &[position='rightBottom']::before {
    top: 85%;
    left: 100%;
    margin-left: 3px;
    transform: translateY(-50%) rotate(90deg);
  }

  &[position='rightBottom']::after {
    top: 75%;
    left: 100%;
    margin-left: 10px;
    transform: translateY(-50%);
  }

  &[position='bottom']::before {
    top: 100%;
    left: 50%;
    margin-top: 5px;
    transform: translatex(-50%) rotate(180deg);
  }

  &[position='bottom']::after {
    top: 100%;
    left: 50%;
    margin-top: 8px;
    transform: translatex(-50%);
  }

  &[position='bottomLeft']::before {
    top: 100%;
    left: 15%;
    margin-top: 5px;
    transform: translatex(-50%) rotate(180deg);
  }

  &[position='bottomLeft']::after {
    top: 100%;
    left: 25%;
    margin-top: 8px;
    transform: translatex(-50%);
  }

  &[position='bottomRight']::before {
    top: 100%;
    left: 85%;
    margin-top: 5px;
    transform: translatex(-50%) rotate(180deg);
  }

  &[position='bottomRight']::after {
    top: 100%;
    left: 75%;
    margin-top: 8px;
    transform: translatex(-50%);
  }
}
</style>