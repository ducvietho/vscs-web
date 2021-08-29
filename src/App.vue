<template>
  <div id="app">
    <landing-mobile v-if="screen == 'mobile'"/>
    <landing-tablet v-else-if="screen == 'tablet'"/>
    <landing-desktop v-else />
  </div>
</template>

<script>
import LandingDesktop from './components/LandingPC.vue'
import LandingMobile from "@/components/LandingMobile";
import LandingTablet from "@/components/LandingTablet";
import AOS from 'aos'
export default {
  name: 'App',
  components: {
    LandingDesktop,
    LandingMobile,
    LandingTablet
  },
  created () {
    AOS.init()
  },
  computed: {
     screen() {
       const userAgent = navigator.userAgent;
       if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
         return "tablet";
       }

       if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
         return "mobile";
       }

       return "desktop";
    }
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Hiragino Kaku";
    src: url('./assets/fonts/hiragino-kaku-gothic-w3.ttc');
  }
</style>
