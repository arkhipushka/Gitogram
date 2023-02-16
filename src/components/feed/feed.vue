<template>
  <div class="feed">
    <div class="feed__user mb-12">
      <avatar size="s" v-if="avatar" :avatar="avatar" class="feed__avatar mr-16" />
      <span class="feed__username">{{ username }}</span>
    </div>
    <div class="feed__card">
      <slot name="card"></slot>
    </div>
    <div class="feed__toggler">
      <toggler @onToggle="showComment" class="mb-12" />
      <ul v-if="isShowComments" class="feed__comment-list">
        <li class="feed__comment-item comment" v-for="elem in 5" :key="elem">
          <comment
            username="joshua_l"
            text="Enable performance measuring in production, at the user's request"
          />
        </li>
      </ul>
    </div>
    <div class="feed__date">15 may</div>
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { toggler } from "../toggler";
import { comment } from "../comment";
export default {
  components: {
    avatar,
    toggler,
    comment
  },
  props: {
    username: {
      type: String,
      default: "John Doe"
    },
    avatar: {
      type: String,
      default: "https://picsum.photos/300/300"
    }
  },
  data () {
    return {
      isShowComments: false
    };
  },
  methods: {
    showComment (state) {
      this.isShowComments = state;
      console.log(state);
    }
  }
};
</script>

<style lang="scss" src="./feed.scss" scoped></style>
