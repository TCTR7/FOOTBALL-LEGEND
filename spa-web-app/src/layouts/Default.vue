<template>
    <div id="default-layout" class="default-layout">
        <Navigation />
        <div class="main-content" id="App-Content" style="flex-grow: 1;">
            <slot style="flex-grow: 1;"/>
        </div>
        <Footer />
    </div>
</template>
<script>
import Navigation from '../components/Navigation.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'default-layout',
    components: {
        Navigation,
        Footer
    }
}
</script>
<style lang="scss" scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    color: #596377;
    font-size: 15px;
    font-family: Lato,sans-serif;
    font-weight: 400;
    height: 100%;
    line-height: 1.428571429;
    margin: 0;
    position: relative;

    .main-content {
        background-color: #f8f8f8;
        padding: 20px;
    }
}
</style>