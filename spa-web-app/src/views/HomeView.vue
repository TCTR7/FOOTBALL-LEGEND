<template>
    <div class="wraper-home-page">
        <div class="section" id="home-1">
            <div class="container home1-content">
                <p class="welcome-text">Tổ chức giải đấu - Quản lý đội thể thao không thể đơn giản hơn</p>
                <div class="control-shortcut box-center">
                    <router-link class="btn-shortcut link" to="/">Tạo giải đấu</router-link>
                    <router-link class="btn-shortcut link" to="/">Tìm giải đấu</router-link>
                    <router-link class="btn-shortcut link" to="/">Tạo đội hình</router-link>
                    <router-link class="btn-shortcut link" to="/">Trở thành đại lý</router-link>
                </div>
                <div class="common-infor box-center">
                    <div class="infor league box-center">
                        <span class="title">Giải đấu</span>
                        <p class="details">44.439</p>
                    </div>
                    <div class="infor teams box-center">
                        <span class="title">Giải đấu</span>
                        <p class="details">44.439</p>
                    </div>
                    <div class="infor players box-center">
                        <span class="title">Giải đấu</span>
                        <p class="details">44.439</p>
                    </div>
                    <div class="infor matchs box-center">
                        <span class="title">Giải đấu</span>
                        <p class="details">44.439</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" id="home-2">
            <div class="container home2-content">
                <div class="content content-1" :class="{ 'visible': isVisible }">
                    <div class="sub-content">
                        <div class="sub-content-title">
                            <div class="content-title-container">
                                <span class="step-number">1</span>
                                <p class="step-title">{{ $t('nav_create_tournament') }}</p>
                            </div>
                        </div>
                        <pre class="description">{{ $t('create_league_description') }}</pre>
                    </div>
                </div>
                <div class="content content-2" :class="{ 'visible': isVisible }">
                    <div class="sub-content">
                        <div class="sub-content-title">
                            <div class="content-title-container">
                                <span class="step-number">2</span>
                                <p class="step-title">{{ $t('setup_league') }}</p>
                            </div>
                        </div>
                        <pre class="description">{{ $t('setup_league_description') }}</pre>
                    </div>
                </div>
                <div class="content content-3" :class="{ 'visible': isVisible }">
                    <div class="sub-content">
                        <div class="sub-content-title">
                            <div class="content-title-container">
                                <span class="step-number">3</span>
                                <p class="step-title">{{ $t('operate_league') }}</p>
                            </div>
                        </div>
                        <pre class="description">{{ $t('operate_league_description') }}</pre>
                    </div>
                </div>

            </div>
        </div>
        <div class="section" id="home-3">
            <div class="container home3-content">

            </div>
        </div>
        <div class="section" id="home-4">
            <div class="container home4-content">

            </div>
        </div>
        <div class="section" id="home-5">
            <div class="container home5-content">

            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
export default {
    setup() {
        const isVisible = ref(false)

        watch(() => isVisible, (newValue) => {
            isVisible.value = newValue
            console.log('isVisible.value: ', isVisible.value)
        })

        const checkScroll = () => {
            const box = document.querySelector('.home2-content');
            const triggerPosition = (box.getBoundingClientRect().top + box.getBoundingClientRect().bottom) / 2;
            if (isVisible.value) {
                if (triggerPosition > window.innerHeight * 0.75) {
                    isVisible.value = false

                    console.log('triggerPosition: ', triggerPosition)
                    console.log('window.innerHeight * 0.75: ', window.innerHeight * 0.75)
                }
                return
            }
            console.log('triggerPosition: ', triggerPosition)
            console.log('window.innerHeight * 0.6: ', window.innerHeight * 0.6)

            // Kiểm tra nếu phần tử xuất hiện trong khung nhìn

            isVisible.value = triggerPosition < window.innerHeight * 0.6;
            console.log('isVisible.value: ', isVisible.value)
        };

        onMounted(() => {
            window.addEventListener('scroll', checkScroll);
            checkScroll()
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', checkScroll);
        });

        return {
            isVisible,
            checkScroll
        }
    },

}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes slideAndScale {
    from {
        transform: translateY(20px) scale(0.8);
    }

    to {
        transform: translateY(0) scale(1);
    }
}

.wraper-home-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
    margin-top: 50px;

    .section {
        width: 100%;
        height: 900px;
        background-repeat: no-repeat;
        background-size: cover;

        .container {
            padding: 50px;
            color: white;
        }

        .home1-content {
            display: flex;
            flex-direction: column;
            color: $main-color !important;

            .welcome-text {
                font-size: 32px;
                font-weight: 600;
                font-family: none;
            }

            .control-shortcut {
                padding: 20px;

                .btn-shortcut {
                    height: 50px;
                    line-height: 50px;
                    max-width: 150px;
                    margin: 100px 10px;
                    border-radius: 10px;
                    background-color: $main-color;
                    color: white !important;
                    cursor: pointer;
                    box-shadow: $box-shadown;

                    border: 2px solid transparent;
                    background-clip: padding-box;
                    transition: opacity 0.3s ease, border-image 0.3s ease;

                    &:hover {
                        transform: scale(1.1);
                        background: linear-gradient(to right, #ff8c00, #ffd700);
                        animation: pulse 0.5s infinite;
                        opacity: 0.8;
                    }
                }
            }

            .common-infor {
                padding: 20px;

                .infor {
                    flex-direction: column;
                    max-width: fit-content;
                    padding: 10px 60px;
                    border-radius: 10px;
                    margin: 20px;
                    background-color: $main-color;
                    color: white !important;
                    box-shadow: $box-shadown;

                    background-clip: padding-box;
                    transition: opacity 0.3s ease, border-image 0.3s ease;

                    &:hover {
                        transform: scale(1.1);
                        animation: pulse 0.5s infinite;
                        opacity: 1;
                    }

                    .title {
                        margin-bottom: 10px;
                        padding: 2px;
                        border-bottom: 1px solid white;
                    }
                }
            }
        }

        .home2-content {
            padding: 0 150px;
            width: 100%;
            height: 100%;
            display: flex;

            .content {
                flex: 1;
                height: 100%;
                display: flex;
                flex-direction: column-reverse;

                &:hover {
                    background: rgba(94, 233, 131, 0.3);
                }

                .sub-content {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    height: 350px;
                    opacity: 1 !important;

                    .sub-content-title {
                        padding: 20px 5px;

                        .content-title-container {
                            display: flex;

                            .step-number {
                                font-size: 4em;
                                font-weight: bold;
                                max-width: 100px;
                                color: $main-color !important;
                            }

                            .step-title {
                                display: flex;
                                align-items: center;
                                justify-content: flex-start;
                                font-weight: bold;
                                font-size: 30px;
                            }
                        }
                    }

                    .description {
                        font-size: 17px;
                    }
                }
            }

            .content-1,
            .content-2,
            .content-3 {
                opacity: 0;
                transition: opacity 1s ease;
            }
        }

        .visible {
            opacity: 1 !important;
            animation: slideAndScale 1.5s ease forwards;
        }

        .home3-content {
            padding: 0px;
        }

        .home4-content {
            padding: 0px;
        }

        .home5-content {
            padding: 0px;
        }
    }


    #home-1 {
        background-image: url("../assets/images/backgrounds/hinhnen8.jpg");
    }

    #home-2 {
        background-image: url("../assets/images/backgrounds/hinhnen14.jpg");
    }

    #home-3 {
        background-image: url("../assets/images/backgrounds/hinhnen16.jpg");
    }

    #home-4 {
        background-image: url("../assets/images/backgrounds/hinhnen18.jpg");
    }

    #home-5 {
        background-image: url("../assets/images/backgrounds/hinhnen1.jpg");
    }
}
</style>