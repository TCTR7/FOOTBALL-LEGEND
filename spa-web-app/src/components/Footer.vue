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
                        <font-awesome-icon class="left-icon" style="color: yellow;" :icon="['fa', 'envelope']" />
                    </router-link>
                    <router-link class="link icon-item" to="/">
                        <font-awesome-icon class="left-icon" style="color: rgb(47, 9, 150);" :icon="['fab', 'facebook']" />
                    </router-link>
                    <router-link class="link icon-item" to="/">
                        <font-awesome-icon class="left-icon" style="color: rgb(11, 171, 40);" :icon="['fab', 'instagram']" />
                    </router-link>
                </div>
            </div>
            <div class="item center">
                <p class="company-name">{{ $t('company_name') }}</p>
                <div class="address box-center">
                    <font-awesome-icon class="address-icon center-icon" style="color: black;" :icon="['fa', 'location-dot']" />
                    <span class="box-center display-center">Address Address Address Address Address Address Address Address Address Address</span>
                </div>
                <div class="box-center">
                    <font-awesome-icon class="phone-icon center-icon"  style="color: black;" :icon="['fas', 'phone']" />
                    <span class="display-center box-center" style="font-size: 14px;">{{ '0905.729.459' }}</span>
                </div>
                <div class="box-center">
                    <font-awesome-icon class="center-icon" :icon="['fas', 'envelope']" />
                    <span class="display-center box-center">{{ 'contact@football-legend.vn' }}</span>
                </div>
                <pre class="license box-center">{{ $t('license') }}</pre>
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
                }

            }
        }

        .center {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: black;

            .company-name {
                font-weight: 600;
                font-size: 20px;
                color: rgb(11, 171, 40)
            }

            .display-center {
                display: flex;
                word-wrap: break-word;
                max-width: fit-content;
                justify-content: flex-start !important;
            }

            .address {
                max-width: 300px;
            }
        }

        .right {
            text-align: center;
        }
    }
}

.left-icon {
    width: 25px;
    height: 25px;
    margin: 10px 20px;
    color: black
}

.center-icon {
    width: 15px;
    height: 15px;
    margin: 10px 20px;
    color: black
}
</style>