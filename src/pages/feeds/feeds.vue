<template>
    <div class="topline">
        <topline>
            <template #headline>
            <div class="icon">
                <icon name ="home" />
            </div>
            </template>
            <template #content>
            <ul class="stories">
            <li class="stories-item" v-for= "story in stories" :key="story.id">
                <story-user-item
            :avatar = "story.avatar"
            :username = "story.username"
                />
            </li>
            </ul>
            </template>
        </topline>
    </div>
    <div class="feeds">
        <div class="x-conatiner">
            <ul class="feeds__list">
            <li class="feeds__item feed" v-for="item in 5" :key="item">
            <feed>
            <template #card>
            <card title="VUE.JS" desc="Important framework" :stars = "156" :forks = "100"/>
            </template>
            </feed>
            </li>
            </ul>
        </div>
    </div>
  </template>

<script>
import { topline } from "../../components/topline"
import { storyUserItem } from "../../components/storyUserItem";
import { feed } from "../..//components/feed";
import { card } from "../../components/card";
import stories from "./data.json"
    export default {
    name: "feeds",
    components: {
        topline,
        storyUserItem,
        feed,
        card
    },
    data () {
        return {
            stories
        }
    }
}
</script>

<style lang ="scss" src="./feeds.scss" scoped></style>
