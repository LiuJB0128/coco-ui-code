<template>
  <div class="coco-spin">
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
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
$containerSize: 20px;
$ballSize: 2px;
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
  perspective: 10px;
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