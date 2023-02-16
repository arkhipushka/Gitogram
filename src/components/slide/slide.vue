<template>
    <div class="slide">
      <div class="slide__wrapper">
        <div class="slide__progress">
            <x-progress/>
        </div>
        <div class="slide__user">
          <user/>
        </div>
      <div class="slide-content">
        <!-- //тут будет контент -->
      </div>
      <x-button />
    </div>
    </div>
    </template>
    <script>
    import { xButton } from "../button";
    import { progress } from "../progress"
    import { user } from "../user"
    export default {
      components: {
        xButton,
        xProgress: progress,
        user
      }
    }
    </script>
    <style src="./slide.scss" lang="scss" ></style>