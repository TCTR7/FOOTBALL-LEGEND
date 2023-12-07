<template>
    <div class="register-wrapper box-center">
        <div class="container">
            <div class="register-title box-center main-color">{{ $t('nav_login') }}</div>
            <div class="register-content">
                <div class="register-by-social">
                    <div class="social-buttons">
                        <ButtonIconVue class="facebook" :iconInfo="['fab', 'facebook']" btnName="Facebook" />
                        <ButtonIconVue class="google" :iconInfo="['fab', 'google']" btnName="Google" />
                    </div>
                </div>
                <div class="register-by-email">
                    <div class="input-control">
                        <label for="email" class="require">{{ $t('email_address') }}</label>
                        <input id="email" type="email" class="form-control" v-model="email">
                    </div>
                    <div class="input-control">
                        <label for="pass" class="require">{{ $t('password') }}</label>
                        <input id="pass" type="password" class="form-control" v-model="password">
                    </div>
                </div>
                <div class="forget-password">
                    <label class="checkbox box-center">
                        <input type="checkbox">
                        <span>{{ $t('remember_account') }}</span>
                    </label>
                    <router-link class="link text main-color" to="/">{{ $t('forgot_password') }}</router-link>
                </div>
                <button class="btn submit-btn" type="submit" @click="onLoginSubmitHandle">{{ $t('nav_login') }}</button>
            </div>
            <div class="register-footer box-center">
                <div>
                    {{ $t('have_not_account_yet') }}
                    <router-link class="link main-color" to="/">{{ $t('nav_register') }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ButtonIconVue from '@/components/ButtonIcon.vue';
import useState from "@/hooks/useState"
export default {
    components: {
        ButtonIconVue
    },
    setup() {
        const email = useState('')
        const password = useState('')

        function onLoginSubmitHandle() {
            console.log("email: ", email.value)
            console.log("password: ", password.value)
        }

        return {
            email,
            password,
            onLoginSubmitHandle
        }
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
        min-height: 430px;
        max-width: 550px;
        box-shadow: $box-shadown;
        display: flex;
        flex-direction: column;

        .register-title {
            border-bottom: 1px solid $border-color;
            font-size: 23px;
            font-weight: 300;
        }

        .register-content {
            padding: 10px 50px;
            flex: 1;
            display: flex;
            flex-direction: column;

            .register-by-social,
            .submit-btn {
                width: 100%;
            }

            .submit-btn {
                height: 40px;
                font-size: large;
                background-image: linear-gradient(to right top, #45af2a, #3ba023, #30901c, #268215, #1b730d, #1b730d, #1b730d, #1b730d, #268215, #30901c, #3ba023, #45af2a);
                color: white;
                font-weight: 500;
                margin-top: 15px;

                &:hover {
                    background-image: linear-gradient(to left, #45af2a, #3ba023, #30901c, #268215, #1b730d, #1b730d, #1b730d, #1b730d, #30901c, #268215, #3ba023, #45af2a);
                }
            }

            .forget-password {
                border-bottom: 1px solid rgba(128, 128, 128, 0.291);
                display: flex;
                justify-content: space-between;
                min-height: 30px;
                padding: 10px 2px;

                .checkbox {
                    height: 15px;
                    margin-left: 2px;

                    span {
                        white-space: pre;
                        text-align: left;
                        margin-left: 10px;
                    }
                    input {
                        width: 15px;
                    }
                }

                .text {
                    text-align: right;
                }
            }

            .register-by-social {
                margin: 10px 0;

                .social-buttons {
                    display: flex;
                    margin-top: 30px;

                    .facebook,
                    .google {
                        height: 40px;
                        color: #fff;
                    }

                    .facebook {
                        background-color: rgb(47, 9, 150);

                        &:hover {
                            background-color: rgb(53, 27, 123);
                        }
                    }

                    .google {
                        background-color: rgb(185, 16, 39);

                        &:hover {
                            background-color: rgb(139, 33, 51);
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

            .register-by-email {
                display: flex;
                flex-direction: column;
                margin: 10px 0;

                .input-control {
                    margin-top: 40px;
                    position: relative;

                    label {
                        text-align: left !important;
                        top: -25px;
                        position: absolute;
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
            margin: 10px 0;
        }
    }
}
</style>