<template>
  <div>
    skills
     <BaseUserInfo/>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      stripe
      border
      @click.native='openLoadingOnElement'
      ref="tableLoading"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <br><br><br>
    <el-button type="primary" ref='button' @click.native='getData'>点击获取数据</el-button>
    <el-button type="primary" :loading="loading" @click.native="getD">加载中</el-button>
  </div>
</template>

<script>
export default {

  mounted () {
    console.log(this.$refs.tableLoading.$el)
  },
  methods: {
    getD () {
      console.log('111')
      this.loading = true
    },

    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    openLoadingOnElement () {
      const loading = this.$loading({
        target: this.$refs.tableLoading.$el,
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        fullscreen: false,
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    },
    getData () {
      const loading = this.$loading({
        target: this.$refs.button.$el,
        lock: true,

        spinner: 'el-icon-loading',
        fullscreen: false,
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  },
  data () {
    return {
      loading: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
