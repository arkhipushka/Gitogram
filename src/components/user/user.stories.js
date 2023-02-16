import user from "./user"

export default {
  title: "user",
  component: user
}
export const Primary = () => ({
  components: { user },
  template: "<user />"
})
