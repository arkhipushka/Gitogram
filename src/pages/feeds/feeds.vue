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
          <button class="topline__icon mr-28 icon"  @click="$router.push({ name: 'feeds' })">
            <icon name="home"/>
          </button>
          <div class="topline__avatar mr-24 icon" @click="$router.push({ name: 'user' })">
            <avatar
              v-if="user.avatar_url"
              :avatar="user.avatar_url"
            />
          </div>
          <div class="topline__icon mt-8 icon" @click="logout">
            <icon name="exit"/>
          </div>
        </div>
      </template>
            <template #content>
            <ul class="stories">
            <li class="stories-item" v-for= "{ id, owner } in trendings.slice(0.9)" :key="id">
                <story-user-item
                :avatar="owner.avatar_url"
                :username="owner.login"
                @onPress="$router.push({name: 'stories', params: {initialSlide: id}})"
                />
            </li>
            </ul>
            </template>
        </topline>
    </div>
    <div class="feeds">
        <div class="x-conatiner">
            <ul class="feeds__list">
            <li class="feeds__item feed" v-for= "{
            id,
            name,
            owner,
            description,
            stargazers_count,
            forks,
            issues,
            created_at,
          } in starred" :key="id">
            <feed
            :username="owner.login"
            :avatar="owner.avatar_url"
            :issues="issues?.data"
            :date="new Date(created_at)"
            :loading="issues?.loading"
            @loadContent="loadIssues({ id, owner: owner.login, repo: name })"
            >

            <template #card>
            <card class="feeds__card"
            :title="name"
            :description="description"
            :stars="stargazers_count"
            :forks="forks"/>
            </template>
            </feed>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex"

import { topline } from "../../components/topline"
import { storyUserItem } from "../../components/storyUserItem";
import { card } from "../../components/card";
import { avatar } from "../../components/avatar";
import { feed } from "../..//components/feed";
import { icon } from "../../icons";
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
    computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      user: (state) => state.user.data,
      starred: (state) => state.starred.data
    }),
    ...mapGetters(["getUnstarredOnly"])
  },
    methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchStarred: "starred/fetchStarred",
      fetchIssues: "starred/fetchIssuesForRepo"
    }),
    loadIssues ({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo });
    },
    ...mapActions({
      logoutAction: "auth/logout",
      getUser: "user/getUser"
    }),
    logout () {
      localStorage.removeItem("token");
      this.$router.replace({ name: "auth" });
      window.location.reload();
    }
  },
  mounted () {
    this.fetchTrendings();
    this.fetchStarred({ limit: 10 });
  }
    }
</script>

<style lang ="scss" src="./feeds.scss" scoped></style>
