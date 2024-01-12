import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ClassicalLayout from './components/ClassicalLayout/index'
import App from "./App";
import AdvancedLayout from "./components/AdvancedLayout/index";

// 这个代码是整个UI的入口, 它先加载菜单与路由配置, 然后再按照默认路由展示视图组件(component).
// 创建路由对象
var router = new VueRouter({
    routes: [
        // 这样配置, 默认会进入经典模式
        {path: '/', component: ClassicalLayout},

        // 下面这两个路由, 一个指向经典视图组件, 一个指向高级视图组件.
        {path: '/Classical', component: ClassicalLayout},
        {path: '/Advanced', component: AdvancedLayout}
    ]
})


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
