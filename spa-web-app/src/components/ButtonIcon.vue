<template>
    <button class="btn box-center">
        <font-awesome-icon class="btn-icon " :icon="iconInformation" />
        <span class="btn-name">{{ buttonName }}</span>
    </button>
</template>
<script>
import { toRefs } from 'vue'
import watchingProp from '@/hooks/watchingProp'
export default {
    name: 'button-icon-component',
    props: {
        iconInfo: Array,
        btnName: String
    },
    setup(props) {
        const { iconInfo, btnName } = toRefs(props)
        const iconInformation = watchingProp(iconInfo)
        const buttonName = watchingProp(btnName)

        return {
            iconInformation,
            buttonName
        }
    }
}
</script>
<style lang="scss" scoped>
.btn-icon {
    width: 17px;
    height: 17px;
}

.btn-name {
    max-width: max-content;
    margin-left: 5px;
}
</style>