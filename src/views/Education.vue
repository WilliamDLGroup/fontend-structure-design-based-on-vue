<template>
  <div class="bcg  w-full flex flex-col justify-center items-center ">
    <div
      class="header text-sm w-full h-20 flex justify-between items-center bg-red-700"
    >
      <div class="flex justify-between  items-center ">
        <div>
          <router-link
            to="/login"
            class="flex justify-between  items-center w-32"
            ><BaseIcon
              class="block mx-auto "
              iconName="partyLogo"
              width="40"
              height="40"
            ></BaseIcon>
            <div class="text-base text-white font-medium">
              建党云
            </div></router-link
          >
        </div>

        <div>
          <router-link class="p-2 rounded-full" to="/">首页</router-link>
        </div>
        <div>
          <router-link class="p-2 rounded-full" to="/news"
            >党建资讯</router-link
          >
        </div>
        <div>
          <router-link class="p-2 rounded-full" to="/education"
            >学习教育</router-link
          >
        </div>
        <div>
          <router-link class="p-2 rounded-full" to="/login"
            >组织生活</router-link
          >
        </div>
        <div>
          <router-link class="p-2 rounded-full" to="/login"
            >党建服务</router-link
          >
        </div>
        <div>
          <router-link class="p-2 rounded-full" to="/login"
            >党群服务</router-link
          >
        </div>
      </div>

      <div class=" flex justify-between  items-center mr-20">
        <router-link to="/" class="  mr-20"
          ><el-badge :value="12" class="text-base text-white font-light">
            消息
          </el-badge></router-link
        >
        <router-link
          to="/login"
          class="flex justify-between  items-center w-32"
        >
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <span class="text-base text-white font-light">链上科技</span>
        </router-link>
      </div>
    </div>

    <div class="w-4/5  mt-20  flex p-4">
      <div class="w-3/5 bg-white h-full mr-8 p-4 ">
        <div class="text-red-700">推荐</div>
        <div class="text-red-700">微课</div>

        <div class="flex">
          <div calss="w-1/5 p-2 " v-for="item in 4" :key="item">
            <div class="m-2 border border-gray-400">
              <div>
                <el-image
                  src="https://cea.h3c.com/storage/course/6e2/bf9/91d2ffaf17d737dbe0911899d2_56.jpg"
                ></el-image>
                <div class="text-sm text-gray-600 mt-2">
                  《习近平新时代特色思想系列微课程十讲》
                </div>
                <div class="text-xs text-gray-600 mt-2 pl-2">216人参与</div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-red-700">原著</div>
        <div class="flex">
          <div calss="w-1/5 p-2 " v-for="item in 4" :key="item">
            <div class="m-2 border border-gray-400">
              <div>
                <el-image
                  class="h-32"
                  src="https://cea.h3c.com/storage/cms/fd9/e07/01b8482e76d073ba83fe8b2827_135.jpg"
                ></el-image>
                <div class="text-sm text-gray-600 mt-2">
                  《习近平新时代特色思想系列微课程十讲》
                </div>
                <div class="text-xs text-gray-600 mt-2 pl-2">216人参与</div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-red-700">红色教育</div>

        <div class="flex">
          <div calss="w-1/5 p-2 " v-for="item in 4" :key="item">
            <div class="m-2 border border-gray-400">
              <div>
                <el-image
                  src="https://cea.h3c.com/storage/study/5e1/c5d/a28add8f8ab575e4678c4a1657.jpg"
                ></el-image>
                <div class="text-sm text-gray-600 mt-2">
                  《习近平新时代特色思想系列微课程十讲》
                </div>
                <div class="text-xs text-gray-600 mt-2 pl-2">216人参与</div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-red-700">视频</div>

        <div class="flex">
          <div calss="w-1/5 p-2 " v-for="item in 4" :key="item">
            <div class="m-2 border border-gray-400">
              <div>
                <el-image
                  src="https://cea.h3c.com/storage/cms/90c/2d5/963f46d339a0af0a7e1d19e169_56.png"
                ></el-image>
                <div class="text-sm text-gray-600 mt-2">
                  《习近平新时代特色思想系列微课程十讲》
                </div>
                <div class="text-xs text-gray-600 mt-2 pl-2">216人参与</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/5  bg-white h-64 p-4">
        <div class="text-red-700">快速入口</div>

        <div class="flex h-20 justify-around items-center mt-4">
          <div class="flex flex-col justify-center items-center">
            <BaseIcon
              class="block mx-auto "
              iconName="a"
              width="38"
              height="38"
            ></BaseIcon>

            <div class="mt-2 text-xs">学习签到</div>
          </div>

          <div class="flex flex-col justify-center items-center">
            <BaseIcon
              class="block mx-auto "
              iconName="b"
              width="38"
              height="38"
            ></BaseIcon>

            <div class="mt-2 text-xs">我的学习</div>
          </div>
        </div>
        <div class="flex h-20 justify-around items-center mt-4">
          <div class="flex flex-col justify-center items-center">
            <BaseIcon
              class="block mx-auto "
              iconName="c"
              width="38"
              height="38"
            ></BaseIcon>

            <div class="mt-2 text-xs">学习心得</div>
          </div>

          <div class="flex flex-col justify-center items-center">
            <BaseIcon
              class="block mx-auto "
              iconName="d"
              width="38"
              height="38"
            ></BaseIcon>

            <div class="mt-2 text-xs">学习考试</div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="float-right line-height-center text-white px-8">
        <div>技术支持: 杭州链上科技有限责任公司</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      id: "",
      loading: true
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;

  &.router-link-exact-active {
    background-color: white;
    color: red;
    border: 1px solid white;
  }
}
.bcg {
  background-image: url("../assets/bcg.png");
  background-repeat: no-repeat;
  background-color: #f5f5f5;
}

.w-32 {
  width: 7.2rem;
}
.footer {
  width: 100%;
  height: 72px;

  background-color: rgb(182, 31, 41);
}
.line-height-center {
  line-height: 72px;
}
</style>
