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
                    <HomeInforCommonVue class="league" :title="$t('Giải đấu')" :numberOfDetail="$t('44.439')"/>
                    <HomeInforCommonVue class="teams" :title="$t('Giải đấu')" :numberOfDetail="$t('44.439')"/>
                    <HomeInforCommonVue class="players" :title="$t('Giải đấu')" :numberOfDetail="$t('44.439')"/>
                    <HomeInforCommonVue class="matchs" :title="$t('Giải đấu')" :numberOfDetail="$t('44.439')"/>
                </div>
            </div>
        </div>
        <div class="section" id="home-2">
            <div class="container home2-content">
                <HomeTournamentStage
                    class="content-1"
                    :visible="isVisible"
                    numberOfStage="1"
                    :stage="{title: $t('nav_create_tournament'), desc: $t('create_league_description')}"
                />
                <HomeTournamentStage
                    class="content-2"
                    :visible="isVisible"
                    numberOfStage="2"
                    :stage="{title: $t('setup_league'), desc: $t('setup_league_description')}"
                    :introduction="{title: $t('league_operation'), detail: $t('league_operation_detail')}"
                />
                <HomeTournamentStage
                    class="content-3"
                    :visible="isVisible"
                    numberOfStage="3"
                    :stage="{title: $t('operate_league'), desc: $t('operate_league_description')}"
                />
            </div>
        </div>
        <div class="section" id="home-3">
            <div class="container home3-content">
                <div class="content content-1">
                    <div class="content-title">
                        <p class="header">{{ $t('multiple_league_support_title') }}</p>
                        <pre class="detail">{{ $t('multiple_league_support_description') }}</pre>
                    </div>
                    <div class="content-items">
                        <HomeCard
                            class="item-1"
                            :itemDescription="$t('knock_out_desc')"
                            :iconInfo="{information: ['fa', 'network-wired'], rotation: 90}"
                            :competitionFormat="$t('knock_out')"
                            backgroundImageName="badminton"
                        />
                        <HomeCard
                            class="item-2"
                            :itemDescription="$t('round_robin_desc')"
                            :iconInfo="{information: ['fa', 'vector-square'], rotation: 90}"
                            :competitionFormat="$t('round_robin')"
                            backgroundImageName="basketball"
                        />
                        <HomeCard
                            class="item-3"
                            :itemDescription="$t('winner_bracket_loser_bracket_desc')"
                            :iconInfo="{information: ['fa', 'fa-cubes'], rotation: 90}"
                            :competitionFormat="$t('winner_bracket_loser_bracket')"
                            backgroundImageName="bia"
                        />
                        <HomeCard
                            class="item-4"
                            :itemDescription="$t('robin_phase_knockout_desc')"
                            :iconInfo="{information: ['fa', 'radiation'], rotation: 90}"
                            :competitionFormat="$t('robin_phase_knockout')"
                            backgroundImageName="marathon"
                        />
                        <HomeCard
                            class="item-5"
                            :itemDescription="$t('group_stage_desc')"
                            :iconInfo="{information: ['fa', 'table-cells'], rotation: 90}"
                            :competitionFormat="$t('group_stage')"
                            backgroundImageName="swimmer"
                        />
                    </div>
                </div>
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
import HomeInforCommonVue from '@/components/home/HomeInforCommon.vue'
import HomeCard from '@/components/home/HomeCard.vue'
import HomeTournamentStage from '@/components/home/HomeTournamentStage'
export default {
    components: {
        HomeInforCommonVue,
        HomeCard,
        HomeTournamentStage
    },
    setup() {
        const isVisible = ref(false)

        watch(() => isVisible, (newValue) => {
            isVisible.value = newValue
        })

        const checkScroll = () => {
            const box = document.querySelector('.home2-content');
            const triggerPosition = (box.getBoundingClientRect().top + box.getBoundingClientRect().bottom) / 2;
            if (isVisible.value) {
                if (triggerPosition > window.innerHeight * 0.75) {
                    isVisible.value = false
                }
                return
            }

            isVisible.value = triggerPosition < window.innerHeight * 0.6;
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
        }

        .home3-content {
            padding: 10px 150px 40px;
            width: 100%;
            height: 100%;

            .content {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;

                .content-title {
                    text-align: center;
                    max-height: 300px;
                    flex: 2;
                    padding: 40px;

                    .header {
                        color: $main-color;
                        font-size: 42px;
                        font-weight: 600;
                    }

                    .detail {
                        font-size: 20px;
                        padding: 10px;
                        margin-top: 20px;
                        border-top: 1px solid $main-color;
                    }
                }

                .content-items {
                    flex: 3;
                    display: flex;

                    .item-1 {
                        color: rgb(11, 11, 11);
                    }

                    .item-3 {
                        color: rgb(11, 243, 235);
                    }

                    .item-4 {
                        color: $main-color;
                    }

                    .item-5 {
                        color: rgb(11, 11, 11);
                    }
                }
            }
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