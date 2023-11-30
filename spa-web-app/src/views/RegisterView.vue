<template>
    <div class="register-wrapper box-center">
        <div class="container">
            <div class="register-title box-center">{{$t('nav_register')}}</div>
            <div class="register-content">
                <div class="register-by-social">
                    <LineLabelComponent :labelContent="$t('social_label')" />
                    <div class="social-buttons">
                        <ButtonIconVue class="facebook" :iconInfo="['fab', 'facebook']" btnName="Facebook" />
                        <ButtonIconVue class="google" :iconInfo="['fab', 'google']" btnName="Google" />
                    </div>
                </div>
                <div class="register-by-email">
                    <LineLabelComponent :labelContent="$t('register_email_label')" />
                    <div class="input-control">
                        <label for="email" class="require">{{ $t('email_address') }}</label>
                        <input id="email" type="email" class="form-control" v-model="email">
                    </div>
                    <div class="input-control">
                        <label for="pass" class="require">{{ $t('password') }}</label>
                        <input id="pass" type="password" class="form-control" v-model="password">
                    </div>
                    <div class="input-control">
                        <label for="confirm-password" class="require">{{ $t('confirm_password') }}</label>
                        <input id="confirm-password" type="password" class="form-control" v-model="confirmPassword">
                    </div>
                </div>
                <button class="btn submit-btn" type="submit" @click="onRegisterSubmitHandle">{{ $t('nav_register') }}</button>
                <p class="confirm-policy-desc">
                    {{ $t('confirm_policy_desc_1') }}
                    <router-link class="link main-color" to="/">{{ $t('terms_of_user') }}</router-link>
                    {{ $t('and') }}
                    <router-link class="link main-color" to="/">{{ $t('privacy_policy') }}</router-link>
                    {{ $t('confirm_policy_desc_2') }}
                </p>
            </div>
            <div class="register-footer box-center">
                <div>
                    {{ $t('confirm_had_account') }}
                    <router-link class="link main-color" to="/">{{ $t('nav_login') }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LineLabelComponent from '@/components/LineLabelComponent.vue';
import ButtonIconVue from '@/components/ButtonIcon.vue';
import useState from "@/hooks/useState"
export default {
    components: {
        LineLabelComponent,
        ButtonIconVue
    },
    setup() {
        const email = useState('')
        const password = useState('')
        const confirmPassword = useState('')

        function onRegisterSubmitHandle() {
            console.log("email: ", email.value)
            console.log("password: ", password.value)
            console.log("confirmPassword: ", confirmPassword.value)
        }

        return {
            email,
            password,
            confirmPassword,
            onRegisterSubmitHandle
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
        min-height: 600px;
        max-width: 600px;
        box-shadow: $box-shadown;
        display: flex;
        flex-direction: column;

        .main-color {
            color: $main-color
        }

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

            .confirm-policy-desc {
                margin: 10px 0;
                text-align: left;
                font-size: 13px;
                padding: 0 2px;
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