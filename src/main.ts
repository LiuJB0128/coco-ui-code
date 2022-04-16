import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import first from './components/first.vue';
import second from './components/second.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: first},
    {path: '/xxx', component: second}
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
