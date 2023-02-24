<template>
  <button  :class="[ 'c-button', {loading}, {disabled}, `theme-${theme}`]">
    <span class="preloader" v-if="loading">
      <preloader />
    </span>
    <span class="btn-text" v-else>
      <slot>{{text}}</slot>
    </span>
  </button>
</template>

<script>
import { preloader } from "../preloader"
export default {
  name: "xButton",
  components: { preloader },
  props: {
    loading: {
      type: Boolean
    },
    theme: {
      type: String,
      default: "white"
    },
    disabled: {
      type: Boolean
    },
    hoverText: {
      type: String
    },
    rubberish: {
      type: Boolean
    }
  }
}
</script>

  <style src="./xButton.scss" lang="scss" scoped></style>