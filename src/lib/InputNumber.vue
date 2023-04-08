<template>
  <div class="coco-input-number" :class="classes">
    <div class="coco-input-number-input-wrap">
      <input type="text" :value="value || ''" class="coco-input-number-input" @keyup="keyDown" @change="checkCount">
    </div>
    <div class="coco-input-number-handle-wrap">
      <span @click="addCount" class="coco-input-number-handle"
            :class="{'coco-input-number-handle-up': true, 'coco-input-number-handle-up-disabled': upDisabled}">+</span>
      <span @click="reduceCount" class="coco-input-number-handle"
            :class="{'coco-input-number-handle-down': true, 'coco-input-number-handle-down-disabled': downDisabled}">-</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';

const props = defineProps({
  value: Number,
  max: Number,
  min: Number,
  size: String,
  borderless: Boolean
});
const emit = defineEmits(['update:value']);
const upDisabled = ref(false);
const downDisabled = ref(false);
const classes = computed(() => {
  return {
    [`coco-input-number-size-${props.size}`]: props.size,
    'coco-input-number-borderless': props.borderless
  };
});
const addCount = () => {
  let count = props.value;
  if (props.max) {
    downDisabled.value = false;
    upDisabled.value = count >= props.max - 1;
    if (count < props.max) {
      count++;
    }
  } else {
    count++;
  }
  emit('update:value', count);
};
const reduceCount = () => {
  let count = props.value;
  if (props.min) {
    upDisabled.value = false;
    downDisabled.value = count <= props.min + 1;
    if (count > props.min) {
      count--;
    }
  } else {
    count--;
  }
  emit('update:value', count);
};
const keyDown = (e) => {
  let kCount = Number(e.target.value.replace(/[^\d]/g, ''));
  if (props.max) {
    if (kCount > props.max) {kCount = props.max;}
  }
  emit('update:value', kCount);
};
const checkCount = (e) => {
  let finallyCount = Number(e.target.value);
  if (props.max) {
    if (finallyCount >= props.max) {
      e.target.value = props.max.toString();
    }
  }
  if (props.min) {
    if (finallyCount <= props.min) {
      e.target.value = props.min.toString();
      emit('update:value', Number(e.target.value));
    }
  }
};
</script>

<style lang="scss">
$green: #5FBC90;
$grid: #d9d9d9;
.coco-input-number {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  height: 32px;
  width: 90px;
  border: 1px solid $grid;
  border-radius: 2px;
  transition: all .3s;

  &.coco-input-number-size-large {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }

  &.coco-input-number-size-small {
    font-size: 16px;
    height: 24px;
    line-height: 24px;
  }

  &.coco-input-number-borderless {
    border: none;
  }

  &:hover {
    border-color: $green;

    .coco-input-number-handle-wrap {
      opacity: 1;
    }
  }
}

.coco-input-number-handle-wrap {
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 100%;
  border-radius: 0 2px 2px 0;
  opacity: 0;
  transition: opacity .24s linear .1s;
  background: white;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  display: flex;
  flex-direction: column;
}

.coco-input-number-handle {
  width: 100%;
  height: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid $grid;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.coco-input-number-handle-down {
  border-top: 1px solid $grid;
}

.coco-input-number-input-wrap {
  position: relative;
  height: 100%;
}

.coco-input-number-input {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 11px;
  text-align: left;
  border: 0;
  border-radius: 2px;
  transition: all .3s linear;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px $green;
  }
}

.coco-input-number-handle-up-disabled, .coco-input-number-handle-down-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>