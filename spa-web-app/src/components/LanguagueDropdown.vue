<template>
    <div>
        <div class="dropdown-title box-center">
            <country-flag-icon :country="currentLanguage" size="normal" style="margin: 0; padding: 0;" />
            <font-awesome-icon :icon="['fa', 'caret-down']" style="width: 20px; margin-left: -8px !important;" />
        </div>
        <ul class="dropdown-menu" v-if="isVisible">
            <div class="item box-center language-content" v-for="(item, index) in languages" :key="index"
                @click="changeLanguage(item)">
                <country-flag-icon style="margin: 0; padding: 0; min-width: 52px;" :country="item" size="normal" />
                <span class="country-name">{{ $t(item) }}</span>
            </div>
        </ul>
    </div>
</template>
<script>
import i18n from '../localization/index'
import { ref, toRefs } from "vue"
import useState from "@/hooks/useState";
export default {
    name: 'language-dropdown-component',
    props: {
        isVisibleMenu: Boolean
    },
    setup(props) {
        const currentLanguage = ref(i18n.global.locale)
        const languages = ref(i18n.global.availableLocales)
        const { isVisibleMenu } = toRefs(props);
        const isVisible = useState(isVisibleMenu)


        function changeLanguage(newLanguage) {
            i18n.global.locale = newLanguage
            currentLanguage.value = newLanguage
        }

        return {
            languages,
            isVisible,
            currentLanguage,
            changeLanguage
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";



.dropdown-title {

    &:hover {
        cursor: pointer;
        color: rgb(165, 162, 162);
        opacity: .5;
    }
}

.dropdown-menu {
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: absolute;
    background-clip: padding-box;
    background-color: #fff;
    border: none;
    box-shadow: 0 1px 2px #d8d8d8;
    border-radius: 4px;
    margin-top: 10px;
    height: auto;
    max-height: 500px;
    right: 2px;
    min-width: 200px;
    padding: 5px;
    text-align: left;
    top: 104%;
    z-index: 1000;

    .item {
        display: block;
        padding: 5px;
        white-space: nowrap;
        background-color: transparent;

        &:hover {
            background-color: $main-color;
            cursor: pointer;
        }
    }

    .language-content {
        display: flex;
        flex-direction: row;

        .country-name {
            white-space: nowrap;
            color: black;
            text-align: left;
        }
    }
}
</style>