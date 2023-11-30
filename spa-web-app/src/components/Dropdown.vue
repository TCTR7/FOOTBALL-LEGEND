<template>
    <div class="dropdown box-center" ref="dropdownRef" @click="showDropdownMenu">
        <div class="dropdown-title">
            <p class="box-center" style="white-space: nowrap;">{{ $t(dropdownInfos.title ? dropdownInfos.title : "Trần Cao Trung") }}</p>
            <font-awesome-icon :icon="['fa', 'caret-down']" style="width: 10px;margin-left: 5px; margin-top: 3px;"/>
        </div>
        <ul class="dropdown-menu" v-if="isVisibleMenu">
            <router-link class="item link" v-for="(item, index) in dropdownInfos.menu" :key="index"
                :to="{ path: item.path }">{{ $t(item.name) }}</router-link>
        </ul>
    </div>
</template>
<script>
import { ref, toRefs } from "vue"
import useState from "@/hooks/useState";
export default {
    name: 'dropdown-component',
    props: {
        infos: Object
    },
    setup(props) {
        const { infos } = toRefs(props);
        const dropdownInfos = useState(infos)

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
    

    .dropdown-title {
        cursor: pointer;
        padding: 2px;
        color: white;
        display: flex;

        font-awesome-icon {
            
        }

        &:hover {
            color: rgba(230, 228, 228, 0.5);
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
        max-height: 300px;
        left: -10px;
        min-width: 200px;
        padding: 5px;
        text-align: left;
        top: 34px;
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