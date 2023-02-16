import comment from "./comment.vue"

export default {
  title: "comment",
  component: { comment }
}

const template = () => ({
  components: { comment },
  template: "<comment text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elite\" username=\"Username\" />"
})

export const Default = template.bind({ template })