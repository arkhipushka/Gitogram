<template>
      <div class="stats">
    <div class="stats__border stats__left">
      <div class="stats__icon mr-4">
        <icon name="stars" />
      </div>
      <span>Star</span>
    </div>
    <div class="stats__border">
      {{ stars }}
    </div>
    <div class="stats__border ">
      <div class="stats__icon mr-4">
        <icon name="forks" />
      </div>
      <span>Forks</span>
    </div>
    <div class="stats__border stats__right">
      {{ forks }}
    </div>
  </div>
</template>

<script>
import { icon } from "../../icons";
export default {
  name: "stats",
    components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./stats.scss" scoped></style>