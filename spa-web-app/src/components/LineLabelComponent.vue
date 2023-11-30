<template>
    <div class="label">
        <div class="box-center">
            <span>{{ content }}</span>
        </div>
    </div>
</template>
<script>
import { toRefs } from 'vue'
import watchingProp from '@/hooks/watchingProp'
export default {
    name: 'line-label-component',
    props: {
        labelContent: String
    },
    setup(props) {
        const { labelContent } = toRefs(props)
        const content = watchingProp(labelContent)

        return {
            content
        }
    }
}
</script>
<style lang="scss" scoped>
.label {
    border-bottom: 1px solid rgba(183, 182, 182, 0.3);
    text-align: center;
    margin: 15px 0;
    position: relative;
    padding: 0 40px;
}

.label span {
    background-color: #fff;
    bottom: -10px;
    font-size: small;
    padding: 0 10px;
    position: absolute;
    max-width: max-content;
}
</style>