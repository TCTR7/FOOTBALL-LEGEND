<template>
    <div class="app-bar" id="AppBar">
        <div class="app-nav navbar-default navbar-fixed-top">
            <div class="nav-container">
                <div class="branding">
                    <router-link class="link" :to="{ name: routerConstant.HOME_VIEW_NAME }">
                        <img class="branding-icon" src="../assets/images/logo15.png" alt="">
                    </router-link>
                </div>
                <div class="nav-content">
                    <ul>
                        <div class="nav-content-item box-center" :class="isNavActive ? 'active' : ''">
                            <router-link class="link item-content box-center" :to="{ name: routerConstant.HOME_VIEW_NAME }">{{
                                $t('home') }}</router-link>
                        </div>
                        <div class="nav-content-item box-center nav-dropdown tournament" :class="isNavActive ? 'active' : ''">
                            <Dropdown :infos="dropdownConstant.TOURNAMENT_MENU" />
                        </div>
                        <div class="nav-content-item box-center nav-dropdown teams" :class="isNavActive ? 'active' : ''">
                            <Dropdown :infos="dropdownConstant.TEAM_MENU" />
                        </div>
                        <div class="nav-content-item box-center" :class="isNavActive ? 'active' : ''">
                            <router-link class="link item-content box-center" :to="{ name: routerConstant.PRICE_LIST_VIEW_NAME }">{{
                                $t('nav_pricing') }}</router-link>
                        </div>
                        <div class="nav-content-item box-center blog">
                            <router-link class="link item-content box-center" :to="{ name: routerConstant.BLOG_VIEW_NAME }">{{
                                $t('nav_blog') }}</router-link>
                        </div>
                        <div class="nav-content-item box-center">
                            <router-link class="link item-content box-center" :to="{ name: routerConstant.SHOPPING_VIEW_NAME }">{{
                                $t('nav_shopping') }}</router-link>
                        </div>
                        <div class="nav-content-item box-center" v-if="!isLogged">
                            <router-link class="link item-content box-center" :to="{ name: routerConstant.LOGIN_VIEW_NAME }">{{
                                $t('nav_login') }}</router-link>
                        </div>
                        <div class="nav-content-item box-center" v-if="!isLogged">
                            <router-link class="link register-btn btn item-content box-center" :to="{ name: routerConstant.REGISTER_VIEW_NAME }">{{ $t('nav_register') }}</router-link>
                        </div>
                        <div class="nav-content-item box-center nav-dropdown" style="margin-right: 20px;"
                            :class="isNavActive ? 'active' : ''" v-if="isLogged">
                            <Dropdown :infos="dropdownConstant.PROFILE_MENU" />
                        </div>
                        <div class="inform nav-dropdown" @click="onShowNotifyClickHandle" ref="notificationRef">
                            <Notification :showContent="isShowNotifyContent" />
                            <font-awesome-icon :icon="['fa', 'caret-down']" class="caret-down" />
                        </div>
                        <LanguagueDropdown class="nav-dropdown"/>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RouterConstants from "@/constants/RouterConstants"
import { DropdownConstant } from "@/constants/DropdownConstant"
import Dropdown from "@/components/Dropdown.vue"
import LanguagueDropdown from "./LanguagueDropdown.vue"
import { ref } from 'vue'
import Notification from "./Notification.vue"
export default {
    name: 'navigation-component',
    components: {
        Dropdown,
        LanguagueDropdown,
        Notification
    },
    setup() {
        const routerConstant = RouterConstants
        const dropdownConstant = DropdownConstant
        // TODO - handle authorization
        const isLogged = ref(false)
        const isShowNotifyContent = ref(false)
        const notificationRef = ref(null)

        function onShowNotifyClickHandle(event) {
            event.preventDefault()
            console.log(isShowNotifyContent.value)
            isShowNotifyContent.value = !isShowNotifyContent.value
            console.log(isShowNotifyContent.value)
        }

        function closeDropdowns(event) {
            event.preventDefault()
            if (notificationRef.value && !notificationRef.value.contains(event.target)) {
                isShowNotifyContent.value = false
            }
        }

        return {
            routerConstant,
            dropdownConstant,
            isLogged,
            isShowNotifyContent,
            notificationRef,
            closeDropdowns,
            onShowNotifyClickHandle
        }
    },

    mounted() {
        document.addEventListener('click', this.closeDropdowns);
    },

    beforeUnmount() {
        document.removeEventListener('click', this.closeDropdowns);
    }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

.app-bar {
    display: block;
    height: 60px;
    position: fixed;
    z-index: 1111;

    .app-nav {
        border-radius: 0;
        height: 100%;

        .nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            padding: 10px;
            position: relative;

            .branding {
                height: 100%;
                width: 150px;
                position: absolute;
                left: 20px;

                .branding-icon {
                    width: 100%;
                    height: 100%;
                }
            }

            .nav-content {
                height: 100%;
                position: absolute;
                right: 0px;
                max-width: 60%;

                ul {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;

                    .nav-dropdown {
                        position: relative;
                        color: white;
                    }

                    .tournament, .teams {
                        min-width: 6rem;
                    }

                    .blog {
                        max-width: 40px;
                    }

                    .inform {
                        max-width: 35px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .caret-down {
                            width: 20px;
                            margin-left: 10px;

                            &:hover {
                                cursor: pointer;
                                color: rgb(165, 162, 162);
                                opacity: .5;
                            }
                        }
                    }

                    .nav-content-item {
                        margin-right: 5px;
                        padding: 0;

                        .item-content {
                            color: white;
                            white-space: nowrap;

                            &:hover {
                                color: rgb(165, 162, 162);
                                opacity: .5;
                            }
                        }

                        .register-btn {
                            margin: 10px;
                            touch-action: manipulation;
                            user-select: none;
                            vertical-align: middle;
                            white-space: nowrap;
                            padding: 0 10px;
                            min-height: 35px;
                            background-color: #676ec1;
                            background-image: linear-gradient(to right top, #9467c1,
                                    #8c69c2, #846ac2, #7b6cc2, #736dc2, #736dc2, #736dc2,
                                    #736dc2, #7c6cc2, #846ac2, #8d69c2, #9567c1) !important;
                            font-size: 14px;
                        }
                    }

                    .nav-content-item.active {
                        background-color: #736dc2;
                    }

                    .nav-content-item:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }

    .navbar-default {
        background-color: $main-color;
        background-image: linear-gradient(to right top,
                #45af2a, #3ba023, #30901c, #268215, #1b730d,
                #1b730d, #1b730d, #1b730d, #268215, #30901c, #3ba023, #45af2a);
        border-color: transparent;
    }

    .navbar-fixed-top {
        border-width: 0 0 1px;
        height: 64px;
    }
}
</style>