import Vue from 'vue'; 
import store from './data/store';

const spa = false;

if(!spa) {
    import Custom from './components/custom';
    const app = new Vue({
        el: '#root',
        components: [Custom],
        data: {
            store
        }
    })
} else {
    import VueRouter from 'vue-router';
    import Root from './components/Root';
    import {routes} from './routes';

    Vue.use(VueRouter);
    const router = new VueRouter();
    routes(router);
    router.start(Root, '#root');
}