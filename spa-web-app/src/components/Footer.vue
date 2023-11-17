<template>
    <div id="AppFooter" class="footer-wraper">
        <div class="container box-center">
            <div class="item left">
                <p style="color: rgb(44, 45, 46);">{{$t('make_tournament_system')}}</p>
                <router-link to="/">Terms of user</router-link>
                <router-link to="/">Terms of user</router-link>
                <router-link to="/">Terms of user</router-link>
                <router-link to="/">Terms of user</router-link>
                <router-link to="/">Terms of user</router-link>
                <router-link to="/">Terms of user</router-link>
                <router-link to="/">Terms of user</router-link>
                <router-link to="/">Terms of user</router-link>
            </div>
            <div class="item center">
                This is footer
            </div>
            <div class="item right">
                This is footer
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer-component'
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";
.footer-wraper {
    height: 300px;
    background-color: #fff;
    position: relative;
    padding: 30px 0px;
    color: $main-color;

    .container {
        padding: 0px 150px;
        display: flex;

        .item {
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .left {
            text-align: left;
            margin-left: 10px;
        }

        .center {
            text-align: center;
        }
    }
}
</style>