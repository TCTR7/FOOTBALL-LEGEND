import {ref, watch, onBeforeUnmount} from 'vue'

export default function watchingProp(propValue) {
    const variableRef = ref(propValue);

    const stopWatching = watch(() => propValue, (newValue) => {
        variableRef.value = newValue
    })

    onBeforeUnmount(() => {
        stopWatching()
    })

    return variableRef
}