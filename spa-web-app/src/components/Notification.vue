<template>
    <div class="notification-bell" :class="isNotificationActive ? 'active' : ''">
        <font-awesome-icon class="bell-icon" :icon="['fa', 'bell']" v-if="!isUnreadNotify" />
        <font-awesome-icon class="bell-icon" :icon="['fa', 'bell']" shake v-if="isUnreadNotify" />
        <div class="notification-badge" v-if="isUnreadNotify">
            <span class="notify-number">{{ notificationLength }}</span>
        </div>
        <div class="notify-content" v-if="isShowContent">
            <div class="inform-header box-center">
                <div class="header-content">{{ $t('notifications') }}</div>
                <div class="header-icons">
                    <font-awesome-icon class="icon" :icon="['fa', 'envelope']" v-if="isUnreadNotify"
                        @click="confirmNotificationHaveRead" />
                    <font-awesome-icon class="icon" :icon="['fa', 'envelope-open']" v-if="!isUnreadNotify" />
                    <router-link class="link icon" :to="routers.NOTIFICATION_VIEW_NAME">
                        <font-awesome-icon class="icon" :icon="['fas', 'arrow-up-right-from-square']" />
                    </router-link>
                </div>
            </div>
            <div class="notify-content-item" style="color: black;" v-for="(item, index) in notifications" :key="index">
                <p class="content-title">{{ $t(item.title) }}</p>
                <pre style="white-space: pre-line;">{{ $t(item.content) }}</pre>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import RouterConstants from "@/constants/RouterConstants"
import useState from '@/hooks/useState';
import useVuexState from '@/hooks/useVuexState'
export default {
    name: 'notification-component',
    props: {
        isVisibleMenu: Boolean
    },
    setup(props) {
        const { isVisibleMenu } = toRefs(props);
        const isShowContent = useState(isVisibleMenu)
        // TODO - handle vuex
        const store = useStore()

        const routers = ref(RouterConstants)

        const isNotificationActive = useVuexState('notification/isNotificationActive');

        const notificationLength = useVuexState('notification/notificationLength');

        const notifications = useVuexState('notification/notifications');

        const isUnreadNotify = useVuexState('notification/isUnreadNotifycations');

        function confirmNotificationHaveRead(event) {
            event.preventDefault()
            store.commit('notification/confirmThatNotificationHaveRead')
        }

        return {
            isNotificationActive,
            notifications,
            isShowContent,
            notificationLength,
            routers,
            isUnreadNotify,
            confirmNotificationHaveRead
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

.notification-bell {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    .bell-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        margin-top: 5px;
        color: yellow;
    }

    .notification-badge {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: red;
        color: #fff;
        border-radius: 50%;
        font-size: 12px;
        font-weight: bold;
        display: none;
        width: 13px;
        height: 15px;

        .notify-number {
            margin-bottom: 1px;
        }
    }

    .notify-content {
        position: absolute;
        display: block;
        min-width: 500px;
        background-color: white;
        top: 47px;
        right: -20px;
        height: fit-content;
        max-height: 400px;
        overflow: auto;
        z-index: 3000;
        box-shadow: $box-shadown;
        color: black !important;

        .inform-header {
            padding: 10px;
            border-bottom: 1px solid $main-color;

            .header-content {
                font-size: 24px;
                font-weight: bold;
                text-align: left;
            }

            .header-icons {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                right: 10px;
                padding: 5px;

                .icon {
                    max-width: 30px;
                    margin-right: 15px;
                    height: 25px;
                }
            }
        }

        .notify-content-item {
            display: block;
            text-align: left;
            border-bottom: 2px solid $main-color;
            padding: 10px;

            .content-title {
                padding: 5px 5px 5px 1px;
                font-weight: bold;
                font-size: 18px;
            }
        }
    }
}

.notification-bell.active {
    animation: Shake .5s;
}

.notification-bell.active .notification-badge {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    margin-right: 2px;
}
</style>