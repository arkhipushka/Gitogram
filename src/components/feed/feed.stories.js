import feed from './feed.vue'
import card from '../card/card.vue'

export default {
  title: 'feed',
  component: {
    feed,
    card
  }
}

const template = () => ({
  components: {
    feed,
    card
  },
  template: `
    <feed>
      <template #card>
        <card title="johnan" desc="A CLI that writes your git commit messages for you with AI" stars = 165 forks = 55/>
      </template>
    </feed>
  `
})

export const Default = template.bind(template)