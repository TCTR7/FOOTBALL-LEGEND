import {ref, watch, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

export default function useVuexState(stateKey) {
    const store = useStore()

    const stateRef = ref(store.getters[stateKey]);

    const stopWatching = watch(() => store.getters[stateKey], newValue => {
        stateRef.value = newValue
    })

    onBeforeUnmount(() => {
        stopWatching();
    });

    return stateRef
}