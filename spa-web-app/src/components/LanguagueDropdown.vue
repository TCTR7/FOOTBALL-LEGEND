<template>
    <div class="dropdown" ref="dropdownRef" @click="showDropdownMenu">
        <div class="dropdown-title box-center">
            <country-flag-icon :country="currentLanguage" size="normal" style="margin: 0; padding: 0;"/>
            <font-awesome-icon :icon="['fa', 'caret-down']" style="width: 20px;"/>
        </div>
        <ul class="dropdown-menu" v-if="isVisibleMenu">
            <div class="item box-center language-content" v-for="(item, index) in languages" :key="index" @click="changeLanguage(item)">
                <country-flag-icon style="margin: 0; padding: 0; min-width: 52px;" :country="item" size="normal"/>
                <span class="country-name">{{ $t(item) }}</span>
            </div>
        </ul>
    </div>
</template>
<script>
import i18n from '../localization/index'
import { ref } from "vue"
export default {
    name: 'language-dropdown-component',
    setup() {
        const currentLanguage = ref(i18n.global.locale)
        const languages = ref(i18n.global.availableLocales)
        console.log(currentLanguage.value)
        console.log(languages.value)
        const dropdownRef = ref(null);

        const isVisibleMenu = ref(false)

        function showDropdownMenu(event) {
            event.preventDefault()
            isVisibleMenu.value = !isVisibleMenu.value
        }

        function closeDropdowns(event) {
            event.preventDefault()
            if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
                isVisibleMenu.value = false
            }
        }

        function changeLanguage(newLanguage) {
            console.log("newLanguage: ", newLanguage)
            i18n.global.locale = newLanguage
            currentLanguage.value = newLanguage
        }

        return {
            isVisibleMenu,
            languages,
            dropdownRef,
            currentLanguage,
            closeDropdowns,
            showDropdownMenu,
            changeLanguage
        }
    },

    mounted() {
        document.addEventListener('click', this.closeDropdowns);
    },

    beforeUnmount() {
        document.removeEventListener('click', this.closeDropdowns);
    }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

.dropdown {
    display: block;

    .dropdown-title {
        cursor: pointer;
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
        top: 100%;
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
}
</style>