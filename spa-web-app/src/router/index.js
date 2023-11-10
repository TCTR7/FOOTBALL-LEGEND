import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SystemConstants from '@/constants/SystemConstants';
import RouterConstants from '@/constants/RouterConstants';

function setLayoutForRoute(layout) {
    return (to, from, next) => {
        to.meta.layout = layout;
        next();
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: RouterConstants.HOME_VIEW_NAME,
            component: HomeView,
            meta: {
                layout: SystemConstants.DEFAULT_LAYOUT,
                title: 'Football-Legend-Home-View'
            },
            beforeEnter: setLayoutForRoute(SystemConstants.DEFAULT_LAYOUT)
        }
    ]
})

export default router