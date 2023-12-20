<template>
    <div @drop.prevent="onDrop" :data-active="active" @dragenter.prevent="setActive" @dragover.prevent="setInactive"
        @dragleave.prevent="setInactive">
        <slot :dropZoneActive="active"></slot>
    </div>
</template>
<script>
import { onMounted, onUnmounted, ref } from 'vue'
export default {
    name: 'drop-zone-component',
    setup(props, {emit}) {
        const events = ['dragenter', 'dragover', 'dragleave', 'drop']
        let active = ref(false)
        let inActiveTimeout = null // add a variable to hold the timeout key

        function setActive() {
            active.value = true
            console.log("active.value: ", active.value)
            clearTimeout(inActiveTimeout) // clear the timeout
        }

        function setInactive() {
            inActiveTimeout = setTimeout(() => {
                active.value = false
            }, 50)
        }

        function onDrop(e) {
            setInactive()
            console.log("onDrop: ", ...[e.dataTransfer.files])
            emit('files-dropped', ...[e.dataTransfer.files])
        }

        function preventDefaults(e) {
            e.preventDefault()
        }

        onMounted(() => {
            events.forEach((eventName) => {
                document.body.addEventListener(eventName, preventDefaults)
            })
        })

        onUnmounted(() => {
            events.forEach((eventName) => {
                document.body.removeEventListener(eventName, preventDefaults)
            })
        })
        return {
            onDrop,
            setActive,
            setInactive
        }
    },
}
</script>