// eslint-disable-next-line storybook/story-exports

import xButton from "./xButton.vue"

export default {
  title: "xButton",
  component: { xButton },
  argTypes: {
    text: {
      control: { type: "text" }
    },
    hoverText: {
      control: { type: "text" }
    }
  }
}

const defaultView = (args) => ({
  components: { xButton },
  data () {
    return { args }
  },
  template:
    // eslint-disable-next-line quotes
    '<x-button v-bind="args"></x-button>'
})

export const Default = defaultView.bind({})
Default.story = {
  name: "Стандартный вид"
}

Default.args = {
  text: "Following",
  hoverText: "Unfollow"
}
