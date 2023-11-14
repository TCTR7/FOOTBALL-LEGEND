<template>
    <div class="dropdown" ref="dropdownRef" @click="showDropdownMenu">
        <div class="dropdown-title box-center">
            <p class="box-center" style="white-space: nowrap;">{{ dropdownInfos.title }}</p>
            <font-awesome-icon :icon="['fa', 'caret-down']" />
        </div>
        <ul class="dropdown-menu" v-if="isVisibleMenu">
            <router-link class="item link" v-for="(item, index) in dropdownInfos.menu" :key="index"
                :to="{ path: item.path }">{{ item.name }}</router-link>
        </ul>
    </div>
</template>
<script>
import { ref, watch, toRefs } from "vue"
export default {
    name: 'dropdown-component',
    props: {
        infos: Object
    },
    setup(props) {
        const { infos } = toRefs(props);
        const dropdownRef = ref(null);

        const dropdownInfos = ref(infos.value)
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

        watch(() => props.infos, (newValue) => {
            dropdownInfos.value = newValue;
        });

        return {
            isVisibleMenu,
            dropdownInfos,
            dropdownRef,
            closeDropdowns,
            showDropdownMenu
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
        padding: 2px;
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
        max-height: 200px;
        left: -10px;
        min-width: 160px;
        padding: 5px;
        text-align: left;
        top: 100%;
        z-index: 1000;

        .item {
            display: block;
            color: black;
            padding: 10px;
            white-space: nowrap;
            background-color: transparent;

            &:hover {
                background-color: $main-color;
            }
        }
    }
}
</style>