# 开始使用
首先需要[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "coco-ui"
```

就可以使用我提供的组件了。 对于每个组件的用法，请参考单个组件对应的文档。

## Vue 单文件组件

代码示例：

``` JavaScript
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
import {Button, Tabs, Switch, Dialog} from "coco-ui"
export default {
  components: {Button}
}
</script>
```