import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const confirm = (options) => {
  const {title, content, ok, cancel, okText, cancelText, closeOnClickOverlay} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel, closeOnClickOverlay
        },
        {
          title,
          content,
          okText,
          cancelText
        }
      );
    },
  });
  app.mount(div);
};