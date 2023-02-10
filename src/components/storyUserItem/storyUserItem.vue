<template>
 <div class="c-story-user-item">
     <button class="c-story-user-item__button" @click="$emit('onPress') ">
       <avatar :avatar="avatar" size="l" />
     </button>
     <div class="username">{{ username }}</div>
 </div>
</template>

<script>
import { avatar } from "../../components/avatar";
export default {
  components: {
    avatar
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./storyUserItem.scss" lang="scss" scoped></style>
