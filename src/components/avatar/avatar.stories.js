/* eslint-disable quotes */
import avatar from "./avatar.vue"

export default {
  title: "avatar",
  component: { avatar },
  argTypes: {
    size: {
      options: ["s", "m", "l"],
      control: { type: "select" }
    }
  }
}

const Template = (args) => ({
  components: {
    avatar
  },
  data () {
    return {
      args
    }
  },
  template: '<avatar v-bind="args"/>'
})

export const Avatar = Template.bind({})
Avatar.args = {
  avatar: 'http://www.myptzone.com/assets/1/18/placeholder_male.png?9',
  size: 'l'
}
Avatar.story = {
  name: "three sizes"
}

// export const Medium = Template.bind({})
// Medium.args = {
//   avatarUrl: 'http://www.myptzone.com/assets/1/18/placeholder_male.png?9',
//   avatarSize: 'm'
// }
// Medium.story = {
//   name: "Medium"
// }

// export const Small = Template.bind({})
// Small.args = {
//   avatarUrl: 'http://www.myptzone.com/assets/1/18/placeholder_male.png?9',
//   avatarSize: 's'
// }
// Small.story = {
//   name: "Small"
// }
