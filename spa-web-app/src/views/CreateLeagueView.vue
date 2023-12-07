<template>
    <div class="create-league-wraper box-center">
        <div class="create-league-content">
            <div class="create-league-header">
                <div class="left">
                    <div class="infor">
                        <p class="title">{{ $t('nav_create_tournament') }}</p>
                        <p class="require-info">{{ $t('create_league_require_inform') }}</p>
                    </div>
                </div>
                <div class="right">
                    <button class="btn introduction box-center">{{ $t('introduction') }}</button>
                </div>
            </div>
            <div class="create-league-main box-center">
                <div class="main-1">
                    <div class="upload-image">
                        <input type="file" @change="onFileChanged($event)" accept="image/*" capture />
                    </div>
                    <div class="league-infor-input"></div>
                </div>
                <div class="main-2"></div>
                <div class="main-3"></div>
                <div class="main-4"></div>
                <div class="main-5"></div>
            </div>
            <div class="create-league-footer box-center"></div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        const file = ref(null);
        const form = ref < HTMLFormElement > (null);

        function onFileChanged(event) {
            const target = event.target;
            console.log(target)
            if (target && target.files) {
                console.log("target.files[0]: ", target.files[0])
                file.value = target.files[0];
            }
        }

        return {
            file,
            form,
            onFileChanged
        }

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
        min-height: 1000px;
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
            height: 70px;
            padding: 10px;
        }

        .create-league-header {
            border-bottom: 1px solid rgb(210, 207, 207);
            display: flex;

            .left,
            .right {
                position: relative;
                width: 100%;
                height: 100%;
                padding: 5px;
            }

            .infor {
                width: 100%;
                height: 100%;
                position: absolute;
                text-align: left;
                display: flex;
                flex-direction: column;

                .title {
                    font-size: 24px;
                    font-weight: 500px;
                }

                .require-info {
                    font-size: 13px;
                    color: orange;
                    padding-left: 5px;
                }
            }

            .introduction {
                position: absolute;
                right: 0;
                width: fit-content;
                padding: 13px;
                background-color: $main-color;
            }
        }

        .create-league-main {
            flex: 1;
            padding: 20px 80px;
            border-bottom: 1px solid rgb(210, 207, 207);
            flex-direction: column;

            .main-1,
            .main-2,
            .main-3,
            .main-5,
            .main-4 {
                padding: 5px;
                margin: 5px;
                display: flex;
                width: 100%;
            }

            .main-1 {
                min-height: 200px;
                background-color: aqua;

                .upload-image {
                    width: 200px;
                    height: 200px;
                    background-color: bisque;
                }

                .league-infor-input {
                    flex: 1;
                    background-color: black;
                }
            }

            .main-2 {
                min-height: 150px;
                background-color: aqua;
            }

            .main-3 {
                min-height: 150px;
                background-color: aqua;
            }

            .main-4 {
                min-height: 150px;
                background-color: aqua;
            }

            .main-5 {
                min-height: 150px;
                background-color: aqua;
            }
        }
    }
}
</style>