<template>
    <div class="infor box-center">
        <span class="title">{{ titleInfo }}</span>
        <p class="details">{{ statistics }}</p>
    </div>
</template>
<script>
import { toRefs } from 'vue'
import useState from '@/hooks/useState'
export default {
    name: 'home-info-common-component',
    props: {
        title: String,
        numberOfDetail: String
    },
    setup(props) {
        const { title, numberOfDetail } = toRefs(props)
        const titleInfo = useState(title)
        const statistics = useState(numberOfDetail)
        return {
            titleInfo,
            statistics
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../public/assets/scss/common.scss";

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
</style>