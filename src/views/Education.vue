<template>
  <div>
    education
    <BaseUserInfo />
    <el-row :gutter="20" v-loading="loading">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary"
      >上传<i class="el-icon-upload el-icon--right"></i
    ></el-button>
    <br />
    <br />
    <br />
    <input type="text" v-model="name" />
    <input type="text" v-model.number="id" />
    <div @click="changeUserInfo">点击更改用户信息</div>
    <br />
    <br />
    <div @click="change">action点击更改用户信息</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      id: '',
      loading: true
    }
  },
  methods: {
    changeUserInfo () {
      this.$store.commit('changUserInfo', { name: this.name })
    },
    change () {
      // 传参方式
      // this.$store.dispatch('changUserInfo', { name: this.name })
      this.$store.dispatch({
        type: 'changUserInfo',
        name: this.name

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
