<template>
    <div class="item customHover">
        <div class="overlay"></div>
        <div class="sub-item-top" :style="customStyle">
            <span class="desc">{{ description }}</span>
        </div>
        <div class="sub-item-bottom">
            <div class="sport-symbol-and-detail">
                <font-awesome-icon class="sport-symbol" :icon="icon.information" :rotation='icon.rotation' />
                <p class="sport-detail">{{ competitionFormat }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { toRefs } from 'vue'
import watchingProp from '@/hooks/watchingProp'
export default {
    name: 'home-card-component',
    props: {
        itemDescription: String,
        iconInfo: {
            type: Object,
            default: () => ({
                information: [],
                rotation: 'none'
            })
        },
        competitionFormat: String,
        backgroundImageName: String
    },
    setup(props) {
        const { itemDescription, iconInfo, competitionFormat, backgroundImageName } = toRefs(props)
        const description = watchingProp(itemDescription)
        const icon = watchingProp(iconInfo)
        const competitionFormatInformation = watchingProp(competitionFormat)
        const imageName = watchingProp(backgroundImageName)
        const imagePath = require(`../../assets/images/sports/${imageName.value}.jpg`)
        const customStyle = {backgroundImage: `url(${imagePath})`}
        return {
            description,
            icon,
            competitionFormatInformation,
            customStyle
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../public/assets/scss/common.scss";

@keyframes slideDown {
    to {
        transform: translateY(50px);
    }
}

.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    position: relative;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .sub-item-top {
        flex: 1;
        background-size: cover;

        .desc {
            text-align: center;
            padding: 30px 10px;
            margin-top: 30px;
            display: none;
            font-weight: 700;
        }
    }

    .sub-item-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        color: white;

        .sport-symbol-and-detail {
            font-size: 25px;
            font-weight: 600;

            .sport-symbol {
                width: 80px;
                height: 80px;
                margin: 10px;
            }

            .sport-detail {
                margin-top: 10px;
            }
        }
    }
}

.item:hover {
    animation: slideDown .5s ease forwards;
}

.item:hover .overlay {
    opacity: 1;
    background: rgba(84, 243, 127, 0.2);
    z-index: 1;
}

.item:hover .sub-item-top .desc {
    display: block;
    opacity: 1 !important;
    z-index: 2;
}

.item:hover .sub-item-bottom {
    color: $main-color;
}
</style>