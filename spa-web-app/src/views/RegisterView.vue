<template>
    <div class="register-wrapper box-center">
        <div class="container">
            <div class="register-title box-center">Đăng ký</div>
            <div class="register-content">
                <div class="register-by-social">
                    <LineLabelComponent :labelContent="$t('social_label')"/>
                    <div class="social-buttons">
                        <ButtonIconVue class="facebook" :iconInfo="['fab', 'facebook']" btnName="Facebook"/>
                        <ButtonIconVue class="google" :iconInfo="['fab', 'google']" btnName="Google"/>
                    </div>
                </div>
                <div class="register-by-email"></div>
                <div class="submit"></div>
            </div>
            <div class="register-footer box-center">Bạn đã có tài khoản <span>đăng nhập</span></div>
        </div>
    </div>
</template>
<script>
import LineLabelComponent from '@/components/LineLabelComponent.vue';
import ButtonIconVue from '@/components/ButtonIcon.vue';
export default {
    components: {
        LineLabelComponent,
        ButtonIconVue
    },
    setup() {

    }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

$border-color: rgba(183, 182, 182, 0.3);

.register-wrapper {
    width: 100%;
    height: 100%;
    padding: 30px 0;
    background-color: rgb(240, 238, 238);

    .container {
        background-color: white;
        min-height: 600px;
        max-width: 600px;
        box-shadow: $box-shadown;
        display: flex;
        flex-direction: column;

        .register-title {
            border-bottom: 1px solid $border-color;
            font-size: 23px;
            font-weight: 300;
            color: $main-color;
        }

        .register-content {
            padding: 10px 50px;
            flex: 1;
            display: flex;
            flex-direction: column;

            .register-by-social,
            .submit {
                width: 100%;
                height: 100px;
                display: flex;
                flex-direction: column;
            }

            .register-by-social {
                margin: 10px 0;
                .social-label {
                    border-bottom: 1px solid $border-color;
                    text-align: center;
                    margin: 15px 0;
                    position: relative;
                    padding: 0 40px;
                }

                .social-label span {
                    background-color: #fff;
                    bottom: -10px;
                    font-size: small;
                    padding: 0 10px;
                    position: absolute;
                    max-width: max-content;
                }

                .social-buttons {
                    display: flex;
                    margin-top: 10px;

                    .facebook,
                    .google {
                        height: 40px;
                        color: #fff;
                    }

                    .facebook {
                        background-color: rgb(47, 9, 150);

                        &:hover {
                            background-color: rgb(94, 69, 161);
                        }
                    }

                    .google {
                        background-color: rgb(185, 16, 39);

                        &:hover {
                            background-color: rgb(216, 103, 122);
                        }
                    }

                    .btn-social-icon {
                        width: 17px;
                        height: 17px;
                    }

                    .btn-social-title {
                        max-width: max-content;
                        margin-left: 5px;
                    }
                }
            }
        }

        .register-footer {
            border-top: 1px solid $border-color;
        }

        .register-footer,
        .register-title {
            height: 40px;
        }
    }
}</style>