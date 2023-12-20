<template>
    <div >
        <div class="dropdown-title">
            <p class="box-center" style="white-space: nowrap;">{{ $t(dropdownInfos.title ? dropdownInfos.title : "") }}</p>
            <font-awesome-icon :icon="['fa', 'caret-down']" style="width: 10px;margin-left: 5px; margin-top: 3px;" />
        </div>
        <ul class="dropdown-menu" v-if="isVisibleMenu">
            <router-link class="item link" v-for="(item, index) in dropdownInfos.menu" :key="index"
                :to="{ name: item.name }">{{ $t(item.title) }}</router-link>
        </ul>
    </div>
</template>
<script>
import { toRefs } from "vue"
import useState from "@/hooks/useState";
export default {
    name: 'dropdown-component',
    props: {
        infos: Object,
        isVisibleMenu: Boolean
    },
    setup(props) {
        const { infos, isVisibleMenu } = toRefs(props);
        const dropdownInfos = useState(infos)
        const isVisible = useState(isVisibleMenu)

        return {
            dropdownInfos,
            isVisible
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

.dropdown-title {
    cursor: pointer;
    padding: 2px;
    color: white;
    display: flex;

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
</style>