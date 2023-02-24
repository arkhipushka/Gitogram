<template>
  <button :class="['button', { active: isOpened }]" @click="onToggle">
    <span class="button__text">{{ isOpened ? "Hide" : "Show" }} issues</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import { icon } from "../../icons";

export default {
  name: "toggler",
  components: {
    icon
  },
  emits: ["OnToggle"],
  data () {
    return {
      isOpened: false
    };
  },
  methods: {
    onToggle () {
      this.isOpened = !this.isOpened;
      this.$emit("onToggle", this.isOpened);
    }
  }
};
</script>

<style src="./toggler.scss" lang="scss" scoped></style>
