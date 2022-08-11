<template>
  <button class="coco-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="coco-loadingIndicator"></span>
    <slot/>
  </button>
</template>
<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level, loading} = props;
    const classes = computed(() => {
      return {
        [`coco-theme-${theme}`]: theme,
        [`coco-size-${size}`]: size,
        [`coco-level-${level}`]: level,
        [`coco-button-loading`]: loading
      };
    });
    return {classes};
  }
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green: #5FBC90;
$radius: 4px;
$red: #ff4d4f;
$grey: #b0b2b7;
$shadow: #000004;
$disabled: #f5f5f5;
.coco-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 14px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all .3s cubic-bezier(0.65, 0.05, 0.36, 1);
  font-weight: 400;
  position: relative;

  & + & {
    margin: 6px 0 6px 8px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    box-shadow: 0 0 0 5px $shadow;
    transition: .3s;
  }

  &:active::after {
    box-shadow: none;
    opacity: 0.4;
    transition: 0s;
  }

  &:hover,
  &:focus {
    color: $green;
    border-color: $green;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.coco-theme-primary {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    background: $green;

    &:hover,
    &:focus {
      background: lighten($green, 10%);
    }
  }

  &.coco-theme-dashed {
    border: 1px dashed $border-color;
  }

  &.coco-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $green;

    &:active::after {
      opacity: 0;
    }

    &:hover,
    &:focus {
      color: lighten($green, 10%);
    }
  }

  &.coco-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:active::after {
      opacity: 0;
    }

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.coco-size-big {
    font-size: 18px;
    height: 40px;
    padding: 0 16px;
  }

  &.coco-size-small {
    font-size: 14px;
    height: 24px;
    padding: 0 7px;
  }

  &.coco-theme-button {
    &.coco-level-danger {
      border-color: $red;
      color: $red;

      &:hover,
      &:focus {
        border-color: lighten($red, 10%);
        color: lighten($red, 10%);
      }
    }
  }

  &.coco-theme-primary {
    &.coco-level-danger {
      background: $red;

      &:hover,
      &:focus {
        background: lighten($red, 10%);
        border-color: lighten($red, 10%);
      }
    }
  }

  &.coco-theme-dashed {
    &.coco-level-danger {
      border-color: $red;
      color: $red;

      &:hover,
      &:focus {
        border-color: lighten($red, 10%);
        color: lighten($red, 10%);
      }
    }
  }

  &.coco-theme-link {
    &.coco-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.coco-theme-text {
    &.coco-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.coco-theme-primary {
    &.coco-button-loading {
      > .coco-loadingIndicator {
        border-color: white white white transparent;
      }
    }
  }

  &.coco-theme-primary {
    &.coco-level-danger {
      &.coco-button-loading {
        > .coco-loadingIndicator {
          border-color: white white white transparent;
        }
      }
    }
  }

  &.coco-level-danger {
    &.coco-button-loading {
      > .coco-loadingIndicator {
        border-color: $red $red $red transparent;
      }
    }
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > .coco-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin: 0 4px 0 4px;
    border-radius: 8px;
    border-color: $green $green $green transparent;
    border-style: solid;
    border-width: 1px;
    animation: coco-spin 1s infinite linear;
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