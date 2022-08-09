<template>
  <div>
    <button class="coco-switch" @click="toggle" :class="{'coco-checked':value}" :disabled="disabled">
      <span><span v-if="loading" class="coco-loadingIndicator"></span></span>
    </button>
  </div>
</template>
<script lang="ts">

export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>
<style lang="scss">
@use "sass:math";

$h: 22px;
$h2: $h - 4px;
$green: #5FBC90;
.coco-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: math.div($h, 2);
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: all 250ms;
  }

  &.coco-checked {
    background: #5FBC90;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.coco-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    > .coco-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      border-radius: 8px;
      border-color: $green $green $green transparent;
      border-style: solid;
      border-width: 1px;
      animation: coco-spin 1s infinite linear;
    }
  }
}

@keyframes coco-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>