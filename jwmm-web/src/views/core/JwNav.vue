<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Welcome
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          link
          v-for="(link, index) in drawerItems"
          :key="index"
          :to="link.to"
        >
          <v-list-item-icon>
            <v-icon> {{ link.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ link.title }}
          </v-list-item-title>
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
    drawer: false,
    group: null,
    drawerItems: [
      {
        icon: 'mdi-account-group',
        title: 'Members',
        to: '/panel/members'
      },
      {
        icon: 'mdi-home-modern',
        title: 'Meetings',
        to: '/panel/meeting'
      },
      {
        icon: 'mdi-account-settings',
        title: 'Settings',
        to: '/paneñ/settings'
      }
    ]
  }),

  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
