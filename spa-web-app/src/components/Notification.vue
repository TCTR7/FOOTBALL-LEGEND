<template>
    <div class="notification-bell" :class="isNotificationActive ? 'active' : ''">
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
import { computed, ref, watch, toRefs } from 'vue';
import { useStore } from 'vuex';
import RouterConstants from "@/constants/RouterConstants"
export default {
    name: 'notification-component',
    props: {
        showContent: Boolean
    },
    setup(props) {
        // TODO - handle vuex
        const store = useStore()
        const { showContent } = toRefs(props);

        const isShowContent = ref(showContent.value)

        const routers = ref(RouterConstants)

        const isNotificationActive = computed(() => {
            return store.getters['notification/isNotificationActive'];
        });

        const notificationLength = computed(() => {
            return store.getters['notification/notificationLength'];
        });

        const notifications = computed(() => {
            return store.getters['notification/notifications'];
        });

        const isUnreadNotify = computed(() => {
            return store.getters['notification/isUnreadNotifycations'];
        });

        function confirmNotificationHaveRead(event) {
            event.preventDefault()
            store.commit('notification/confirmThatNotificationHaveRead')
        }

        watch(() => props.showContent, (newValue) => {
            isShowContent.value = newValue
        })

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

.notification-bell::before {
    content: '\1F514';
    font-size: 18px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    width: 10px;
    height: 15px;

    .notify-number {
        margin-bottom: 2px;
    }
}

.notification-bell.active .notification-badge {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>