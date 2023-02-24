<template>
  <div class="slide" :class="{active}">
      <div class="slide__container">
        <div class="header mb-12">
          <div class="slide__progress">
              <x-progress  :active="active" @onFinish="$emit('onProgressFinish')"/>
          </div>
          <div class="slide__user">
            <user
            :username="data.username"
            :src="data.userAvatar"
            />
          </div>
        </div>
      <div class="slide__content" >
        <div class="slide-preloader" v-if="loading">
      <preloader/>
        </div>
        <div class="info">
          <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
          <placeholder v-else :paragraphs="2"/>
        </div>
      </div>
      <div class="slide__footer">
        <div class="slide__button">
        <x-button :theme="buttonTheme"
          @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)"
          :loading="data.following.loading"
        >{{data.following.status ? "Unfollow": "Following"}}</x-button>
      </div>
      </div>
      <template v-if="active">
        <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
            <span class="arrow">
              <icon name="arrow"/>
            </span>
      </button>
      <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
            <span class="arrow">
              <icon name="arrow"/>
            </span>
      </button>
    </template>
   </div>
</div>
</template>
    <script>
    import { xButton } from "../button";
    import { progress } from "../progress"
    import { user } from "../user"
    import { preloader } from "../preloader"
    import { placeholder } from "../placeholder"
    import { icon } from "../../icons";
    export default {
      components: {
        xButton,
        xProgress: progress,
        user,
        preloader,
        placeholder,
        icon
      },
      emits: ["onPrevSlide", "onNextSlide", "onProgressFinish", "onFollow", "onUnFollow"],
      props: {
        active: Boolean,
        loading: Boolean,
        btnsShown: {
      type: Array,
      default: () => ["next", "prev"],
      validator (value) {
        return value.every(item => item === "next" || item === "prev")
      }
    },
        data: {
          type: Object,
          required: true
        }
      },
      computed: {
    buttonTheme () {
      return this.data.following.status === true ? "white" : "green";
    }
  }
    }
    </script>
    <style src="./slide.scss" lang="scss" scoped></style>