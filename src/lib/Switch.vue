<template>
  <div>
    <button class="coco-switch" @click="toggle" :class="{'coco-checked':value}" :disabled="disabled">
      <span/>
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

    &.coco-checked {
      opacity: 0.5;
    }
  }
}
</style>