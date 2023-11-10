<template>
  <div id="app">
    <component :is="layout">
      {{ console.log("layout 1: ", layout) }}
      <router-view :key="route.fullPath" />
    </component>
  </div>
</template>

<script>
import { useRoute } from "vue-router"
import { computed } from "vue"
export default {
  setup() {
    const route = useRoute()
    console.log("layout 0: ", route.meta.layout)
    const layout = computed(() => {
      return route.meta.layout
    })
    return {
      route,
      layout
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  width: 100%;
  height: 100%;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}

.btn {
  transition: all .35s linear;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border: none;
}

.link {
  text-decoration: none;
}

.box-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
