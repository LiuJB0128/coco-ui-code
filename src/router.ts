import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import InputNumberDemo from './components/InputNumberDemo.vue';
import TooltipDemo from './components/TooltipDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';
// @ts-ignore
import intro from './markdown/intro.md';
// @ts-ignore
import getStarted from './markdown/get-started.md';
// @ts-ignore
import install from './markdown/install.md';

const history = createWebHashHistory();
const md = string => h(Markdown, {content: string, key: string});
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'install', component: md(install)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input-number', component: InputNumberDemo},
        {path: 'tooltip', component: TooltipDemo},
      ]
    }
  ],
  scrollBehavior () {
    return { top: 0 }
  }
});
router.afterEach(() => {
  console.log('路由切换了');
});