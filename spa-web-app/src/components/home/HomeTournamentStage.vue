<template>
    <div class="content" :class="{ 'visible': isVisible }">
        <div class="sub-content">
            <div class="sub-content-title">
                <div class="content-title-container">
                    <span class="step-number">{{ stageNumber }}</span>
                    <p class="step-title">{{ stageInfor.title }}</p>
                </div>
            </div>
            <pre class="description">{{ stageInfor.desc }}</pre>
        </div>
        <div class="introduction" v-if="introductionInfo.title != ''">
            <p class="introduction-title">{{ introductionInfo.title }}</p>
            <br>
            <p class="introduction-detail">{{ introductionInfo.detail }}</p>
        </div>
    </div>
</template>
<script>
import { toRefs } from 'vue'
import watchingProp from '@/hooks/watchingProp'
export default {
    name: 'home-tournament-stage-component',
    props: {
        visible: Boolean,
        numberOfStage: String,
        stage: {
            type: Object,
            default: () => ({
                title: "",
                desc: ""
            })
        },
        introduction: {
            type: Object,
            default: () => ({
                title: "",
                detail: ""
            })
        }
    },
    setup(props) {
        const { visible, numberOfStage, stage, introduction } = toRefs(props)
        const isVisible = watchingProp(visible)
        const stageNumber = watchingProp(numberOfStage)
        const stageInfor = watchingProp(stage)
        const introductionInfo = watchingProp(introduction)
        console.log("introductionInfo: ", introductionInfo.value)
        return {
            isVisible,
            stageInfor,
            introductionInfo,
            stageNumber
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../public/assets/scss/common.scss";

@keyframes slideAndScale {
    from {
        transform: translateY(20px) scale(0.8);
    }

    to {
        transform: translateY(0) scale(1);
    }
}

.visible {
    animation: slideAndScale 1.5s ease forwards;
}

.content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;

    &:hover {
        background: rgba(94, 233, 131, 0.3);
    }

    .introduction {
        order: 2;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;

        .introduction-title {
            font-size: 42px;
            font-weight: 600;
            color: $main-color;
            padding-top: 30px;
        }

        .introduction-detail {
            font-size: 20px;
            padding: 10px;
            border-top: 1px solid $main-color;
        }
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
</style>