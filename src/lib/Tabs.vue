<template>
  <div class="coco-tabs">
    <div class="coco-tabs-nav" ref="container" :class="classes">
      <div class="coco-tabs-nav-item" v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }"
           @click="select(t)" :class="{selected: t=== selected}"
           :key="index">{{ t }}
      </div>
      <div class="coco-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="coco-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from './Tab.vue';
import {computed, onMounted, ref, watchEffect} from 'vue';

export default {
  props: {
    selected: {
      type: String
    },
    position: {
      type: String,
      default: top
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props, context) {
    const {position, size} = props;
    const classes = computed(() => {
      return {
        [`coco-tabs-position-${position}`]: position,
        [`coco-tabs-size-${size}`]: size
      };
    });
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {
          left: left1
        } = container.value.getBoundingClientRect();
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      });
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {
      defaults, titles, current, select, selectedItem, indicator, container, classes
    };
  }
};
</script>
<style lang="scss">
$green: #5FBC90;
$color: #333;
$border-color: #d9d9d9;
.coco-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $green;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $green;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 16px 0;
    font-size: 16px;
  }
}

.coco-tabs-nav {
  &.coco-tabs-position-centered {
    display: flex;
    justify-content: center;
  }

  &.coco-tabs-size-big {
    > div {
      font-size: 18px;
    }

    & + .coco-tabs-content {
      font-size: 18px;
    }
  }

  &.coco-tabs-size-small {
    > div {
      font-size: 14px;
    }

    & + .coco-tabs-content {
      font-size: 14px;
    }
  }
}
</style>