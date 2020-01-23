<template>
  <div id="app">
    <jw-nav></jw-nav>
    <router-view />
  </div>
</template>
<script>
import JwNav from '@/components/JwNav'
export default {
  components: { JwNav }
}
</script>
