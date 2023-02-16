import topline from './topline.vue'

export default {
  title: 'topline',
  component: {
    topline
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    topline
  },
  data () {
    return {
      args
    }
  },
  template: `
  <topline/>
  `
})

export const Default = template.bind(template)

Default.args = {
  avatar: 'https://picsum.photos/100/100',
  username: 'Join'
}