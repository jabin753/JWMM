<template>
  <v-app>
    <jw-nav></jw-nav>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import JwNav from '@/components/structure/JwNav'

export default {
  name: 'App',

  components: { JwNav }
}
</script>
