<template>
  <v-app>
    <jw-nav></jw-nav>
    <router-view></router-view>
  </v-app>
</template>

<script>
import JwNav from '@/components/JwNav'
export default {
  name: 'App',

  components: { JwNav },

  data: () => ({
    //
  })
}
</script>
