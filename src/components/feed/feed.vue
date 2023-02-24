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
    </div>
    <div class="comments__container">
      <ul v-if="issues?.length && listShown" class="feed__comment-list">
          <li class="feed__comment-item comment" v-for="issue in issues" :key="issue.id">
            <comment
            :username="issue.user.login" :text="issue.title"
            />
          </li>
        </ul>
    </div>
    <div class="feed__date">{{ humanReadableDate }}</div>
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
    },
    issues: {
      type: Array,
      default: () => []
    },
    date: {
      type: Date,
      required: true
    }
  },
  data () {
    return {
      listShown: false
    };
  },
  computed: {
    humanReadableDate () {
      const date = new Date(this.date);
      return date.toLocaleString("en-EN", { month: "short", day: "numeric" });
    }
  },
  methods: {
    handleToggle (isOpened) {
      this.listShown = isOpened;
      if (isOpened && this.issues.length === 0) {
        this.$emit("loadContent");
      }
    }
  }
};
</script>

<style lang="scss" src="./feed.scss" scoped></style>
