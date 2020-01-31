import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.purple.darken3,
        secondary: colors.purple.base,
        accent: colors.blue.base,
        error: colors.pink.base,
        warning: colors.amber.base,
        info: colors.grey.base,
        success: colors.green.base
      }
    }
  }
})
