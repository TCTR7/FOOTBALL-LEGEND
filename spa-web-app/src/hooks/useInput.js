import {ref, watch} from 'vue'

export default function useInput() {
    const inputValue = ref('')
    watch(() => inputValue, newValue => {
        inputValue.value = newValue
    })

    return inputValue
}