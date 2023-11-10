<template>
    <div class="dropdown">
        <div class="dropdown-title box-center">
            <p class="box-center" style="white-space: nowrap;">Giải đấu</p>
            <font-awesome-icon :icon="['fa', 'caret-down']" />
        </div>
        <ul class="dropdown-menu">
            <router-link class="item link" :to="{name: 'home'}">item1</router-link> 
            <router-link class="item link" :to="{name: 'home'}">item1</router-link> 
            <router-link class="item link" :to="{name: 'home'}">item1</router-link> 
            <router-link class="item link" :to="{name: 'home'}">item1</router-link> 
            <router-link class="item link" :to="{name: 'home'}">item1</router-link> 
            <router-link class="item link" :to="{name: 'home'}">item1</router-link> 
        </ul>
    </div>
</template>
<script>
export default {
    name: 'dropdown-component'
}
</script>
<style lang="scss" scoped>
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
        background-color: rgb(217, 217, 230);
        margin-top: 10px;
        height: auto;
        max-height: 200px;
        left: -10px;

        .item {
            display: block;
            color: black;
            padding: 5px 0;
            border-bottom: 1px solid #606060;
        }
    }
}
</style>