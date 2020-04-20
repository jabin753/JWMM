<template>
  <v-app>
    <jw-nav></jw-nav>
    <core-view></core-view>
  </v-app>
</template>
<script>
export default {
  name: 'ViewIndex',
  components: {
    JwNav: () => import('./core/JwNav'),
    CoreView: () => import('./core/CoreView')
  },
  data: () => ({})
}
</script>
