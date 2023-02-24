<template>
  <div class="card">
    <div class="card__title_wrap mb-16">
      <h2 class="card__title">
        {{ title }}
      </h2>
    </div>
    <div class="card__desc_wrap mb-32">
      <div class="card__desc">
        {{ description }}
      </div>
    </div>
    <div class="card__stats">
      <stats name="stats" :stars= "stars" :forks= "forks" />
    </div>
  </div>
</template>

<script>
import { stats } from "../../components/stats";
export default {
  name: "card",
  components: {
      stats
    },
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  },
  computed: {
    showStats () {
      return this.forks > 0 || this.stars > 0;
    }
  }
};
</script>

<style src="./card.scss" lang="scss" scoped></style>
