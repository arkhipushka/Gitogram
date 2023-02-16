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
            <icon name="home"/>
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
            <li class="stories-item" v-for= "item in items.slice(0,9)" :key="item.id">
                <story-user-item
                :avatar="item.owner.avatar_url"
                :username="item.owner.login"
                />
            </li>
            </ul>
            </template>
        </topline>
    </div>
    <div class="feeds">
        <div class="x-conatiner">
            <ul class="feeds__list">
            <li class="feeds__item feed" v-for= "item  in items" :key="item.id">
            <feed
            :username="item.owner.login"
            :avatar="item.owner.avatar_url">
            <template #card>
            <card class="feeds__card"
            :title="item.name"
            :desc="item.description"
            :stars="item.stargazers_count"
            :forks="item.forks"/>
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
import * as api from "../../api"
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
            avatar,
            items: []
        }
    },
    methods: {
    getFeedData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        stars: item.stargazers_count,
        forks: item.forks
      }
    }
  },
    async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang ="scss" src="./feeds.scss" scoped></style>
