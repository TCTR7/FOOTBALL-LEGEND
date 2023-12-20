<template>
    <component :is="tag" class="file-preview">
        <img :src="file.url" :alt="file.file.name" :title="file.file.name" />
        <span>{{ file.file.name }}</span>
    </component>
</template>

<script>
export default {
    name: 'file-preview-component',
    props: {
        file: {
            type: Object,
            required: true
        },
        tag: {
            type: String,
            default: 'li'
        }
    },
    setup() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.file-preview {
    margin: 5px;
    max-width: 40px;
    max-height: fit-content;
    display: flex;
    align-items: center;

    span {
        min-width: 200px;
        margin-left: 10px;
        white-space: pre;
    }
}
</style>