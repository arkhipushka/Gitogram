<template>
    <div class="c-auth">
      <div class="auth-content">
        <div class="logo">
            <h1 class="logo__title mb-12">
            Gitogram/
          </h1>
        <h3 class="logo__desc mb-32">
            More than just one repository. This is our digital world.
        </h3>
        </div>
        <div class="enter">
          <x-button theme-green size="big" @click="redirectToGhAuth">
            <span class="button-content">
              <span class="button-text"> Войти с помощью GitHub </span>
              <icon name="github" />
            </span>
          </x-button>
        </div>
      </div>
    </div>
</template>

  <script>
  import { mapActions } from "vuex";
  import { xButton } from "../../components/button";
  import { icon } from "../../icons";
  import env from "../../../env";
  export default {
    components: {
      xButton,
      icon
    },
    methods: {
      ...mapActions({
        redirectToGhAuth: "auth/getAuthCode",
        authUserByCode: "auth/authUserByCode"
      })
    },
    async mounted () {
      const code = new URLSearchParams(window.location.search).get("code");
      if (code) {
        const token = await this.authUserByCode(code);
        localStorage.setItem("token", token);
        this.$router.replace({ name: "feeds", query: { search: "" } });
        window.location = env.redirect_url;
      }
    }
  };
  </script>

  <style lang="scss" src="./auth.scss" scoped></style>