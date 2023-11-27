export default {
  layout ({ $device }) {
    if ($device.isMobile) {
      return 'Mobile'
    } else {
      return 'Desktop'
    }
  },
  beforeMount () {
    if (navigator.userAgent.includes('Macintosh') && navigator.maxTouchPoints > 2) {
      this.$nuxt.setLayout('Mobile')
      this.$device.isDesktop = false
      this.$device.isMobile = true
      this.$root.$forceUpdate()
    }
  }
}