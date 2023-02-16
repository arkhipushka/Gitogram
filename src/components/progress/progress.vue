<template>
  <div class="c-progress mb-12" :class="{ active }">
    <div ref="indicator" class="indicator" />
  </div>
</template>
  <script>
  export default {
    data () {
      return {
        active: false
      }
    },
    emits: ["onFinish"],
    methods: {
    emitOnFinish () {
      this.$emit("onFinish")
    }
  },
    mounted () {
      setTimeout(() => {
        this.active = true
      }, 500)
      this.$refs.indicator.addEventListener("transitionend", this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener("transitionend", this.emitOnFinish)
  }
}

</script>
  <style src="./progress.scss" lang="scss" scoped></style>
