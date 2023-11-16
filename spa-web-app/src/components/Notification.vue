<template>
    <div class="notification-bell" :class="isNotificationActive ? 'active' : ''">
        <div class="notification-badge">
            <span class="notify-number">5</span>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    name: 'notification-component',
    setup() {
        const isNotificationActive = ref(true)

        return {
            isNotificationActive
        }
    }
}
</script>
<style lang="scss" scoped>
.notification-bell {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
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