import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import PricingView from '@/views/PricingView.vue'
import ShopsView from '@/views/ShopsView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotificationView from '@/views/NotificationView.vue'
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
        },
        {
            path: '/' + RouterConstants.PRICE_LIST_VIEW_NAME,
            name: RouterConstants.PRICE_LIST_VIEW_NAME,
            component: PricingView,
            meta: {
                layout: SystemConstants.DEFAULT_LAYOUT,
                title: 'Pricing-View'
            },
            beforeEnter: setLayoutForRoute(SystemConstants.DEFAULT_LAYOUT)
        },
        {
            path: '/' + RouterConstants.BLOG_VIEW_NAME,
            name: RouterConstants.BLOG_VIEW_NAME,
            component: BlogView,
            meta: {
                layout: SystemConstants.DEFAULT_LAYOUT,
                title: 'Blog-View'
            },
            beforeEnter: setLayoutForRoute(SystemConstants.DEFAULT_LAYOUT)
        },
        {
            path: '/' + RouterConstants.NOTIFICATION_VIEW_NAME,
            name: RouterConstants.NOTIFICATION_VIEW_NAME,
            component: NotificationView,
            meta: {
                layout: SystemConstants.DEFAULT_LAYOUT,
                title: 'Notificaiton-View'
            },
            beforeEnter: setLayoutForRoute(SystemConstants.DEFAULT_LAYOUT)
        },
        {
            path: '/' + RouterConstants.SHOPPING_VIEW_NAME,
            name: RouterConstants.SHOPPING_VIEW_NAME,
            component: ShopsView,
            meta: {
                layout: SystemConstants.SHOP_LAYOUT,
                title: 'Shops-View'
            },
            beforeEnter: setLayoutForRoute(SystemConstants.SHOP_LAYOUT)
        },
        {
            path: '/' + RouterConstants.LOGIN_VIEW_NAME,
            name: RouterConstants.LOGIN_VIEW_NAME,
            component: LoginView,
            meta: {
                layout: SystemConstants.DEFAULT_LAYOUT,
                title: 'Login-View'
            },
            beforeEnter: setLayoutForRoute(SystemConstants.DEFAULT_LAYOUT)
        },
        {
            path: '/' + RouterConstants.REGISTER_VIEW_NAME,
            name: RouterConstants.REGISTER_VIEW_NAME,
            component: RegisterView,
            meta: {
                layout: SystemConstants.DEFAULT_LAYOUT,
                title: 'Register-View'
            },
            beforeEnter: setLayoutForRoute(SystemConstants.DEFAULT_LAYOUT)
        }
    ]
})

export default router