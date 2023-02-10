<template>
    <div class="c-comment">
        <div class="comment__username mr-8">{{ username }}</div>
        <div class="comment__text">{{ text }}</div>
    </div>
    </template>
    <script>
    export default {
      name: "comment",
      props: {
        text: {
          type: String,
          required: true
        },
        username: {
          type: String,
          required: true
        }
      }
    }
    </script>
    <style src='./comment.scss'    lang='scss' scoped>
    </style>