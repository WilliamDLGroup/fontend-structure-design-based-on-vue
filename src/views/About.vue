<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/education">eduction</router-link>
    <router-link to="/skills">skills</router-link>
    <router-link to="/experence">experence</router-link>
    <br />
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
