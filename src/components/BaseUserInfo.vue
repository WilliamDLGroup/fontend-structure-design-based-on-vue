<template>
  <div class="flex">
    <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
    <span class="center">{{ userName }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {

      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  },

  computed: {
    userName: function () {
      return this.$store.state.userinfo.name
    }

  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.center {
  text-align: center;
  font-size: 30px;
  color: lightseagreen;
  font-weight: 600;
  margin-left: 7px;
}
</style>
