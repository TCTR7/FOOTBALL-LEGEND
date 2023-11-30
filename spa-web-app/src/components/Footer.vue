<template>
    <div id="AppFooter" class="footer-wraper box-center">
        <div class="wrapper">
            <div class="item left">
                <div class="left-container">
                    <p class="left-title sub-item">{{ $t('make_tournament_system') }}
                    </p>
                    <router-link class="link sub-item" to="/">{{ $t('terms_of_user') }}</router-link>
                    <router-link class="link sub-item" to="/">{{ $t('privacy_policy') }}</router-link>
                    <router-link class="link sub-item" to="/">{{ $t('payment_policy') }}</router-link>
                    <router-link class="link sub-item" to="/">{{ $t('contact') }}</router-link>
                    <router-link class="link sub-item" to="/">{{ $t('information_security_policy') }}</router-link>
                    <router-link class="link sub-item" to="/">{{ $t('comments_on_football_legend') }}</router-link>
                    <router-link class="link sub-item" to="/">{{ $t('nav_pricing') }}</router-link>
                    <div class="icons sub-item">
                        <router-link class="link icon-item" to="/">
                            <font-awesome-icon class="left-icon" style="color: yellow;" :icon="['fa', 'envelope']" />
                        </router-link>
                        <router-link class="link icon-item" to="/">
                            <font-awesome-icon class="left-icon" style="color: rgb(47, 9, 150);"
                                :icon="['fab', 'facebook']" />
                        </router-link>
                        <router-link class="link icon-item" to="/">
                            <font-awesome-icon class="left-icon" style="color: rgb(11, 171, 40);"
                                :icon="['fab', 'instagram']" />
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="item center">
                <div class="center-container  box-center">
                    <p class="company-name">{{ $t('company_name') }}</p>
                    <div class="address box-center">
                        <font-awesome-icon class="address-icon center-icon" style="color: black;"
                            :icon="['fa', 'location-dot']" />
                        <span class="box-center display-center">Address Address Address Address Address Address Address
                            Address
                            Address Address</span>
                    </div>
                    <div class="box-center">
                        <font-awesome-icon class="phone-icon center-icon" style="color: black;" :icon="['fas', 'phone']" />
                        <span class="display-center box-center" style="font-size: 14px;">{{ '0905.729.459' }}</span>
                    </div>
                    <div class="box-center">
                        <font-awesome-icon class="center-icon" :icon="['fas', 'envelope']" />
                        <span class="display-center box-center">{{ 'contact@football-legend.vn' }}</span>
                    </div>
                    <pre class="license box-center">{{ $t('license') }}</pre>
                </div>

            </div>
            <div class="item right">
                <div class="right-container">
                    <div class="facebook-info">
                        <div class="top">
                            <div class="header">
                                <p class="title">{{ $t('community_page') }}</p>
                                <p class="facebook-group">{{ $t('facebook_group') }} {{ 4.788 }} {{ $t('members') }}</p>
                            </div>
                            <router-link class="link link-to-fanpage" to="/">
                                <div class="link-to-fanpage-container">
                                    <font-awesome-icon style="height: 18px;" :icon="['fab', 'facebook']" />
                                    <span class="link-to-fanpage-text">{{ $t('visit_group') }}</span>
                                </div>
                            </router-link>
                        </div>
                        <div class="introduction">{{ $t('facebook_introduction') }}</div>
                    </div>
                    <div class="app-icons">
                        <div class="app-store">
                            <router-link class="link apple-store" to="/">
                                <img src="../assets/images/appstores/apple-app.png" alt="">
                            </router-link>
                            <router-link class="link google-store" to="/">
                                <img src="../assets/images/appstores/google-play.png" alt="">
                            </router-link>
                        </div>
                        <div class="qr-code">
                            <img src="../assets/images/appstores/app-qr.png" alt="">
                        </div>
                    </div>
                </div>
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
    max-height: 300px;
    margin-top: 60px;

    .wrapper {
        background-color: #fff;
        position: relative;
        padding: 20px 0;
        color: $main-color;
        display: flex;
        justify-content: space-between;
        max-width: 1200px;

        .item {
            padding: 15px;
            max-width: 350px;
        }

        .left {
            text-align: left;

            .left-container {
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;

                .left-title {
                    color: rgb(44, 45, 46) !important;
                    font-weight: 600;
                    font-size: 16px;
                }

                .sub-item {
                    color: $main-color;
                    margin: 5px 25px 5px 0px;
                    max-width: fit-content;
                }
            }

            .icons {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;

                .icon-item {
                    max-width: 120px;
                }

            }
        }

        .center {
            text-align: center;
            color: black;
            max-width: 350px !important;

            .center-container {
                flex-direction: column;

                .company-name {
                    font-weight: 600;
                    font-size: 20px;
                    color: rgb(11, 171, 40);
                    margin-bottom: 10px;
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


        }

        .right {
            text-align: center;
            color: black;
            justify-content: center;
            align-items: center;

            .right-container {
                padding: 0 20px;

                .facebook-info {
                    border: 1px solid rgb(17, 17, 17, 0.4);
                    height: fit-content;
                    display: flex;
                    flex-direction: column;
                    padding: 5px 20px;

                    .top {
                        border-bottom: 1px solid rgb(17, 17, 17, 0.4);

                        .header {
                            color: rgb(20, 20, 20, 0.6);

                            .title {
                                font-size: 14px;
                                font-weight: 600;
                                color: rgb(20, 20, 20, 1);
                            }

                            .facebook-group {
                                font-size: 13px;
                            }
                        }

                        .link-to-fanpage {
                            margin: 10px 0px;
                            height: 30px;
                            background-color: rgb(47, 9, 150);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: white;

                            .link-to-fanpage-container {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                height: 100%;
                                max-width: fit-content;

                                .link-to-fanpage-text {
                                    text-align: left !important;
                                    min-width: fit-content;
                                    margin-left: 10px;
                                }
                            }
                        }
                    }

                    .introduction {
                        font-size: 13px;
                    }

                }

                .app-icons {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 20px 20px 0 20px;

                    .app-store {
                        margin: 5px 20px 0px 5px;
                        display: flex;
                        flex-direction: column;

                        .google-store {
                            margin-top: 13px;
                        }
                    }



                    .qr-code {
                        max-height: 110px;
                        max-width: 110px;
                    }
                }
            }


        }
    }


}

.left-icon {
    width: 35px;
    height: 35px;
    margin: 10px 20px;
    color: black
}

.center-icon {
    width: 18px;
    height: 18px;
    margin: 10px 20px;
    color: black
}
</style>