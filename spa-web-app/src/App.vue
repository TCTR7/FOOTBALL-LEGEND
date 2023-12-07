<template>
  <div>
    <component :is="layout">
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

<style lang="scss">
@import "../public//assets/scss/common.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  width: 100%;
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

.form-control {
  background-color: #fff;
  border: 1px solid #dce4ec;
  border-radius: 4px;
  font-size: 15px;
  height: 34px;
  padding: 7px 10px;
  box-shadow: none;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  width: 100%;
}

.main-color {
  color: $main-color
}

</style>
