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
                        <div class="nav-content-item">
                            <router-link class="link item-content"
                                :to="{ name: routerConstant.HOME_VIEW_NAME }">{{ $t('home') }}</router-link>
                        </div>
                        <div class="nav-content-item nav-dropdown">
                            <Dropdown :infos="dropdownConstant.TOURNAMENT_MENU" />
                        </div>
                        <div class="nav-content-item nav-dropdown">
                            <Dropdown :infos="dropdownConstant.TEAM_MENU" />
                        </div>
                        <div class="nav-content-item">
                            <router-link class="link item-content"
                                :to="{ name: routerConstant.HOME_VIEW_NAME }">{{ $t('nav_pricing') }}</router-link>
                        </div>
                        <div class="nav-content-item">
                            <router-link class="link item-content"
                                :to="{ name: routerConstant.HOME_VIEW_NAME }">{{ $t('nav_blog') }}</router-link>
                        </div>
                        <div class="nav-content-item">
                            <router-link class="link item-content"
                                :to="{ name: routerConstant.HOME_VIEW_NAME }">{{ $t('nav_shopping') }}</router-link>
                        </div>
                        <div class="nav-content-item">
                            <router-link class="link item-content"
                                :to="{ name: routerConstant.HOME_VIEW_NAME }">{{ $t('nav_login') }}</router-link>
                        </div>
                        <div class="nav-content-item">
                            <button class="register-btn btn item-content">{{ $t('nav_register') }}</button>
                        </div>
                        <div class="nav-content-item">
                            <div class="inform item-content">Thông báo</div>
                        </div>
                        <div class="nav-content-item nav-dropdown">
                            <LanguagueDropdown />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RouterConstants from "@/constants/RouterConstants"
import DropdownConstant from "@/constants/DropdownConstant"
import Dropdown from "@/components/Dropdown.vue"
import LanguagueDropdown from "./LanguagueDropdown.vue"
export default {
    name: 'navigation-component',
    components: {
        Dropdown,
        LanguagueDropdown
    },
    setup() {
        const routerConstant = RouterConstants
        const dropdownConstant = DropdownConstant

        return {
            routerConstant,
            dropdownConstant
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

.app-bar {
    display: block;
    height: 60px;

    .app-nav {
        border-radius: 0;
        height: 100%;

        .nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            padding: 10px;

            .branding {
                height: 100%;
                width: 150px;
                margin-left: 20px;

                .branding-icon {
                    width: 100%;
                    height: 100%;
                }
            }

            .nav-content {
                height: 100%;
                margin-right: 0;
                margin-left: 300px;

                ul {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;

                    .nav-dropdown {
                        position: relative;
                    }

                    .nav-content-item {
                        margin-right: 5px;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .item-content {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            &:hover {
                                color: rgb(165, 162, 162);
                                opacity: .5;
                            }
                        }

                        .register-btn {
                            margin: 15px;
                            touch-action: manipulation;
                            user-select: none;
                            vertical-align: middle;
                            white-space: nowrap;
                            background-color: #676ec1;
                            background-image: linear-gradient(to right top, #9467c1,
                                    #8c69c2, #846ac2, #7b6cc2, #736dc2, #736dc2, #736dc2,
                                    #736dc2, #7c6cc2, #846ac2, #8d69c2, #9567c1) !important;
                            font-size: 14px;
                        }
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