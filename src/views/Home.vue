<template>
  <div>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>Coco UI</h1>
      <h2>一个 UI 框架</h2>
      <p class="action">
        <a href="">GitHub</a>
        <a href="">起步</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  border: 1px solid red;
  background: pink;
  display: flex;
  padding: 16px;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>