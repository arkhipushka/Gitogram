<template>
<div class="feed">
    <div class="feed__user mb-12">
    <avatar size="s" avatar="https://fastly.picsum.photos/id/289/300/300.jpg?hmac=2XboiU-3pVHnqZPSxwkAlievI1nzd-col1FhgcJriAo"
    class ="feed__avatar mr-16"/>
    <div class="feed__username">josh bosh</div>
    </div>
    <div class="feed__card">
    <slot name="card"></slot>
    </div>
    <div class="feed__toggler">
    <toggler @onToggle="showComment" class="mb-12"/>
    <ul v-if="isShowComments" class="feed__comment-list">
    <li class="feed__comment-item comment" v-for="elem in 5" :key="elem">
    <comment username="joshua_l" text="Enable performance measuring in production, at the user's request"/>
    </li>
    </ul>
    </div>
    <div class="feed__date">15 may</div>
</div>
</template>

<script>
import { avatar } from "../avatar"
import { toggler } from "../toggler"
import { comment } from "../comment";
export default {
    components: {
        avatar,
        toggler,
        comment
    },
    data () {
        return {
            isShowComments: false
        }
    },
    methods: {
        showComment (state) {
            this.isShowComments = state;
            console.log(state)
        }
    }
};
</script>

<style lang = "scss" src= "./feed.scss" scoped></style>