<template>
    <div class="input-control">
        <label for="input">{{ labelTitle }}</label>
        <input id="input" :type="type" class="form-control" v-model="inputValue">
    </div>
</template>
<script>
import { toRefs } from 'vue'
import useInput from '@/hooks/useInput'
import useState from '@/hooks/useState'
export default {
    name: 'input-with-label-component',
    props: {
        title: String,
        inputType: String
    },
    setup(props) {
        const { title, inputType } = toRefs(props)
        const labelTitle = useState(title)
        const type = useState(inputType)
        const inputValue = useInput()

        return {
            inputValue,
            labelTitle,
            type
        }
    }
}
</script>
<style lang="scss" scoped>
.input-control {
    margin-top: 25px;
    position: relative;

    label {
        text-align: left !important;
        top: -20px;
        position: absolute;
        margin-left: 5px;
    }
}
</style>