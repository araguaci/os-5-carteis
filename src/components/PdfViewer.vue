<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.openPdf()
  },
  methods: {
    openPdf() {
      const file = this.$route.params.file
      const pdfUrl = '/os_5_carteis_que_governam_a_america_e_o_mundo' + file + '.pdf'
      // window.open(pdfUrl, '_blank')
    }
  }
}
</script>
