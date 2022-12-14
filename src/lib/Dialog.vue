<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="coco-dialog-overlay" @click="onClickOverlay"></div>
      <div class="coco-dialog-wrapper">
        <div class="coco-dialog">
          <header>
            <slot name="title"/>
            <span @click="close" class="coco-dialog-close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <slot name="footer">
              <Button @click="cancel">
                <slot name="cancelText">取消</slot>
              </Button>
              <Button theme="primary" @click="ok">
                <slot name="okText">确定</slot>
              </Button>
            </slot>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import Button from './Button.vue';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: {Button},
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok?.() !== false) (
          close()
      );
    };
    const cancel = () => {
      props.cancel?.();
      close();
    };
    return {
      close, onClickOverlay, ok, cancel
    };
  }
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.coco-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 100%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 20;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    z-index: 21;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;

    > span {
      margin-left: 20px;
    }
  }

  > main {
    padding: 16px;
    font-size: 14px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 10px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>