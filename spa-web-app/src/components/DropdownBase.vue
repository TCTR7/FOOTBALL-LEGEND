<template>
    <div class="box-center" ref="dropdownRef" @click="showDropdownMenu">
        <slot :isVisibleMenu="isVisibleMenu"/>
    </div>
</template>
<script>
import { ref } from "vue"
export default {
    name: 'dropdown-base-component',
    setup() {

        const dropdownRef = ref(null);
        const isVisibleMenu = ref(false)

        function showDropdownMenu(event) {
            event.preventDefault()
            isVisibleMenu.value = !isVisibleMenu.value
        }

        function closeDropdowns(event) {
            if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
                isVisibleMenu.value = false
            }
        }

        return {
            isVisibleMenu,
            dropdownRef,
            closeDropdowns,
            showDropdownMenu
        }
    },

    mounted() {
        document.addEventListener('click', this.closeDropdowns);
    },

    beforeUnmount() {
        document.removeEventListener('click', this.closeDropdowns);
    }
}
</script>
