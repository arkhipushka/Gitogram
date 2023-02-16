<template>
  <button>
    <span class="text">{{text}}</span>
    <span class="hover-text">{{hoverText}}</span>
  </button>
</template>

<script>
export default {
  name: "xButton",
  props: {
    text: {
      type: String,
      default: "Following"
    },
    hoverText: {
      type: String,
      default: "Unfollow"
    }
  }
}
</script>

  <style src="./xButton.scss" lang="scss" scoped></style>