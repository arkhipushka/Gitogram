<template>
    <div class="user">
        <avatar class="user__avatar mr-16" :size="size" :avatar="src"></avatar>
    <div>
        <div class="user__name">{{ username }}</div>
    </div>
    </div>
</template>

<script>
import { avatar as Avatar } from "../avatar";

export default {
    components: { Avatar },
    props: {
        src: {
        type: String,
        default: "http://www.myptzone.com/assets/1/18/placeholder_male.png?9"
    },
        username: {
        type: String,
        default: "React.reposit"
    },
        size: {
        type: String,
        default: ""
    }
    },
    setup (props) {
        return {}
    }
}

</script>

<style lang="scss" src="./user.scss" scoped></style>