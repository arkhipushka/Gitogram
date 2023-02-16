/* eslint-disable quotes */
import card from "./card.vue"

export default {
  title: "card",
  component: { card }
}

const template = () => ({
  components: { card },
  template: `<card title="johnan" desc="A CLI that writes your git commit messages for you with AI" stars = 165 forks = 55 />`
})

export const Default = template.bind({ })
