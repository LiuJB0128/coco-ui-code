<template>
  <div class="coco-spin" :class="classes">
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-dot"></div>
    <div class="coco-spin-text" v-if="tip">{{ tip }}</div>
  </div>
</template>
<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
  size: String,
  tip: String
});
const classes = computed(() => {
  return {
    [`coco-spin-size-${props.size}`]: props.size
  };
});
let containerSize: string = props.size;
let ballSize: string = '';
if (containerSize === 'large') {
  containerSize = '150px';
  ballSize = '10px';
} else if (containerSize === 'small') {
  containerSize = '30px';
  ballSize = '3px';
} else {
  containerSize = '50px';
  ballSize = '4px';
}
</script>
<style lang="scss">
$containerSize: v-bind(containerSize);
$ballSize: v-bind(ballSize);
$n: 36;
$green: #5FBC90;
$lightgreen: #afddc7;
$pdeg: calc(360deg / $n);
$ani-duration: 2000ms;
.coco-spin {
  width: $containerSize;
  height: $containerSize;
  position: relative;
  border-radius: 50%;
}

.coco-spin-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: $ballSize;
  height: $ballSize;
  margin-left: calc(-1 * $ballSize / 2);
  margin-top: calc(-1 * $ballSize / 2);
  perspective: calc($containerSize / 2);
  transform-style: preserve-3d;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &::before {
    background: $green;
    top: -100%;
    animation: moveGreen $ani-duration infinite;
  }

  &::after {
    background: $lightgreen;
    top: 100%;
    animation: moveLightGreen $ani-duration infinite;
  }
}

.coco-spin-text {
  position: absolute;
  left: 50%;
  bottom: -5px;
  margin-top: -50px;
  color: $green;
  font-size: 14px;
  font-weight: 500;
  transform: translateY(100%) translateX(-50%);
}

@keyframes moveLightGreen {
  0% {
    animation-timing-function: ease-in;
  }
  25% {
    transform: translate3d(0, -100%, -$ballSize);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translate3d(0, -200%, 0);
    animation-timing-function: ease-in;
  }
  75% {
    transform: translate3d(0, -100%, $ballSize);
    animation-timing-function: ease-out;
  }
}

@keyframes moveGreen {
  0% {
    animation-timing-function: ease-in;
  }
  25% {
    transform: translate3d(0, 100%, $ballSize);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translate3d(0, 200%, 0);
    animation-timing-function: ease-in;
  }
  75% {
    transform: translate3d(0, 100%, -$ballSize);
    animation-timing-function: ease-out;
  }
}

@for $i from 1 through $n {
  .coco-spin-dot:nth-child(#{$i}) {
    transform: rotate($pdeg * $i) translateY(calc(-1 * $containerSize / 2));

    &::before, &::after {
      animation-delay: calc(-6 * $i * $ani-duration / $n);
    }
  }
;
}
</style>