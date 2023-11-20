<template>
    <div id="AppFooter" class="footer-wraper">
        <div class="container box-center">
            <div class="item left">
                <p style="color: rgb(44, 45, 46); font-weight: 600; font-size: 16px;">{{ $t('make_tournament_system') }}</p>
                <router-link class="link sub-item" to="/">{{ $t('terms_of_user') }}</router-link>
                <router-link class="link sub-item" to="/">{{ $t('privacy_policy') }}</router-link>
                <router-link class="link sub-item" to="/">{{ $t('payment_policy') }}</router-link>
                <router-link class="link sub-item" to="/">{{ $t('contact') }}</router-link>
                <router-link class="link sub-item" to="/">{{ $t('information_security_policy') }}</router-link>
                <router-link class="link sub-item" to="/">{{ $t('comments_on_football_legend') }}</router-link>
                <router-link class="link sub-item" to="/">{{ $t('nav_pricing') }}</router-link>
                <div class="icons">
                    <router-link class="link icon-item" to="/">
                        <font-awesome-icon class="icon" style="color: yellow;" :icon="['fa', 'envelope']" />
                    </router-link>
                    <router-link class="link icon-item" to="/">
                        <font-awesome-icon class="icon" style="color: rgb(47, 9, 150);" :icon="['fab', 'facebook']" />
                    </router-link>
                    <router-link class="link icon-item" to="/">
                        <font-awesome-icon class="icon" style="color: rgb(11, 171, 40);" :icon="['fab', 'instagram']" />
                    </router-link>
                </div>
            </div>
            <div class="item center">
                This is footer
            </div>
            <div class="item right">
                This is footer
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer-component'
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

.footer-wraper {
    height: 300px;
    background-color: #fff;
    position: relative;
    padding: 30px 0px;
    color: $main-color;

    .container {
        padding: 0px 150px;
        display: flex;

        .item {
            padding: 5px;
            display: flex;
            flex-direction: column;

            .sub-item {
                color: $main-color;
                margin: 5px 0;
            }
        }

        .left {
            text-align: left;
            margin-left: 10px;

            .icons {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;

                .icon-item {
                    max-width: 100px;
                    .icon {
                        width: 25px;
                        height: 25px;
                        margin: 10px 20px;
                    }
                }

            }
        }

        .center {
            text-align: center;
        }
    }
}
</style>