<template>
    <div class="create-league-wraper box-center">
        <div class="create-league-content">
            <div class="create-league-header"></div>
            <div class="create-league-main box-center"></div>
            <div class="create-league-footer"></div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {

    }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";
.create-league-wraper {
    width: 100%;
    height: 100%;
    padding: 30px 0;
    background-color: rgb(240, 238, 238);

    .create-league-content {
        max-width: 900px;
        background-color: white;
        height: 1000px;
        box-shadow: $box-shadown;
        display: flex;
        flex-direction: column;

        .create-league-header,
        .create-league-footer,
        .create-league-main {
            width: 100%;
        }

        .create-league-header,
        .create-league-footer {
            height: 60px;
            padding: 10px;
        }

        .create-league-header {
            border-bottom: 1px solid rgb(210, 207, 207);
        }

        .create-league-main {
            flex: 1;
            padding: 20px 80px;
            border-bottom: 1px solid rgb(210, 207, 207);
        }
    }
}
</style>