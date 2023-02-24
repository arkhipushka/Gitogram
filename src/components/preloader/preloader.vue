<template>
    <div class="preloader" />
</template>

<script>
  export default {
    setup () {
      return {};
    }
  };
  </script>
  <style lang="scss" scoped>
  .preloader {
    border-radius: 50%;
    border-top: 3px solid transparent;
    border-right: 3px solid green;
    border-left: 3px solid green;
    border-bottom: 3px solid green;
    background: transparent;
    transform: rotate(-45deg);
    width: 40px;
    height: 40px;
    transition: all 1.5s;
    animation: rotate 2s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>