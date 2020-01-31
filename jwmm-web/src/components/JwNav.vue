<template>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/logo.jpg')"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-btn
        href="#"
        text
      >
        <span class="ml-2">Asignaciones</span>
      </v-btn>
      <v-btn
        href="#"
        text
      >
        <span class="ml-2">Miembros</span>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: 'JwNav'
}
</script>

<style></style>
