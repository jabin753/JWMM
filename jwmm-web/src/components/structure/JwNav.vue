<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app absolute bottom temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Bienvenido
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Members</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo.jpg')"
          transition="scale-transition"
          width="40"
        />
      </div>
      <span>JWMM - Meeting Management</span>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'JwNav',

  data: () => ({
    drawer: true,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
