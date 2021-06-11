import VueRouter from 'vue-router';

//Components
// import Example from './components/ExampleComponent.vue'
import Example2 from './components/Example-2.vue'
import Bookables from './bookables/Bookable.vue'

const routes =[
    {
        name:'home',
        path:'/',
        component:Bookables
    },
    {
        name:'second',
        path:'/second',
        component:Example2
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;
