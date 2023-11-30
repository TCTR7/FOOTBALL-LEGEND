import {ref, watch, onBeforeUnmount} from 'vue'

export default function useState(propValue) {
    const variableRef = ref(propValue);

    const stopWatching = watch(() => propValue, (newValue) => {
        variableRef.value = newValue
    })

    onBeforeUnmount(() => {
        stopWatching()
    })

    return variableRef
}