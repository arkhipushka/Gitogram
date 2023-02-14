<!-- eslint-disable vue/no-useless-template-attributes -->
<template>
    <div class="topline">
        <topline>
            <template class="topline__wrap" #headline>
        <div class="topline__title_wrap">
          <h1 class="topline__title">
            Gitogram/
          </h1>
        </div>
        <div class="topline__actions">
          <div class="topline__icon mr-28 icon">
            <icon icon name="home"/>
          </div>
          <div class="topline__avatar mr-24 icon">
            <avatar
              avatar="https://fastly.picsum.photos/id/940/300/300.jpg?hmac=9fo8dMC0l9QtPjyCC143w0baGIDuMbaTh5O6KkrjGO8"
            />
          </div>
          <div class="topline__icon mt-8 icon">
            <icon name="exit"/>
          </div>
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
            <li class="feeds__item feed" v-for= "(item, ndx) in 5" :key="ndx">
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
import { card } from "../../components/card";
import { avatar } from "../../components/avatar";
import { feed } from "../..//components/feed";
import { icon } from "../../icons";
import stories from "./data.json"
    export default {
    name: "feeds",
    components: {
        topline,
        storyUserItem,
        feed,
        card,
        icon,
        avatar
    },
    data () {
        return {
            stories,
            avatar
        }
    }
}
</script>

<style lang ="scss" src="./feeds.scss" scoped></style>
