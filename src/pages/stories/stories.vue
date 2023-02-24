<template>
    <div class="wrapper">
      <header class="header">
        <div class="x-container stories-container">
          <button class="header__logo" @click="$router.push({ name: 'feeds' })">
            <h1 class="logo">Gitogram /</h1>
          </button>
            <button class="close-btn" @click="$router.push({ name: 'feeds' })">
              <icon name="cross" />
            </button>
        </div>
      </header>
        <div class="content">
        <stories-slider :initialSlide="Number($route.params.initialSlide)"/>
      </div>
    </div>
</template>

<script>
import { icon } from "../../icons";
import { storiesSlider } from "../../components/storiesSlider";

export default {
  name: "stories",
  components: {
    icon,
    storiesSlider
  }
}
  </script>

<style lang="scss" src="./stories.scss" scoped></style>