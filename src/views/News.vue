<template>
  <div class="news bcg w-full flex flex-col justify-center items-center">
    <div
      class="w-full h-20 text-sm font-medium flex justify-between items-center bg-red-700"
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
          <router-link class="p-2 rounded-full " to="/">首页</router-link>
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

    <div class="middle  mb-40 mt-40 flex ">
      <div class="banner mr-20">
        <el-carousel height="334px">
          <el-carousel-item>
            <el-image
              class="rounded-lg"
              fit="cover"
              src="https://cea.h3c.com/storage/cms/010/138/72ae5fddb72e1d216902a33b36_52.jpg"
            ></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image
              class="rounded-lg"
              fit="cover"
              src="https://cea.h3c.com/storage/cms/ba8/5b0/34cd8b32aff5cdeb14644e46dd_52.jpg"
            ></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image
              class="rounded-lg"
              fit="cover"
              src="https://cea.h3c.com/storage/cms/5ab/f4c/15ed27aa90843afc4af07bb69d_52.jpg"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="fast-door p-4">
        <div class="title text-xl  text-red-700">热点资讯</div>
        <el-divider class="m-y-2"></el-divider>
        <div v-for="item in 10" :key="item" class="py-1">
          <div class="flex justify-between items-center text-xs text-gray-600">
            <span>专家：产能、库存、政策均有底 我国粮食安全有保障 </span>
            <span>2020年03月30日22:32 </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex  mb-40 p-4">
      <div class="banner mr-20 ">
        <div v-for="item in 3" :key="item" class="p-2">
          <div class="tags-box flex h-20 ">
            <div class="w-1/4">
              <el-image
                class="h-20 p-2"
                fit="cover"
                src="https://cea.h3c.com/storage/cms/d5c/dd8/7bed947207ef724ba292157bc8_65.jpg"
              ></el-image>
            </div>
            <div class="flex flex-col justify-between p-2 text-sm w-5/6">
              <span
                >习近平：坚定信心埋头苦干奋勇争先
                谱写新时代中原更加出彩的绚丽篇章</span
              >
              <div class="flex justify-between ">
                <span>来源 : 人民网 - 人民日报 2019-09-19 00:00</span>
                <span class="text-xs text-gray-400">100人浏览</span>
              </div>
            </div>
          </div>
          <el-divider class="custom"></el-divider>
        </div>
      </div>

      <div class="fast-door p-4 ">
        <div class="title text-xl  text-red-700">先进</div>
        <el-divider class="m-y-2"></el-divider>
        <div v-for="item in 10" :key="item" class="py-1">
          <div class="flex justify-between items-center text-xs text-gray-600">
            <span>专家：产能、库存、政策均有底 我国粮食安全有保障 </span>
            <span>2020年03月30日22:32 </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mb-40  h-400">
      <div class="banner mr-20 p-4 ">
        <div class="title text-xl  text-red-700">廉政</div>
        <el-divider class="m-y-2"></el-divider>
        <div v-for="item in 10" :key="item" class="py-1">
          <div class="flex justify-between items-center text-xs text-gray-600">
            <span>专家：产能、库存、政策均有底 我国粮食安全有保障 </span>
            <span>2020年03月30日22:32 </span>
          </div>
        </div>
      </div>

      <div class="fast-door p-4 ">
        <div class="title text-xl  text-red-700">本地</div>
        <el-divider class="m-y-2"></el-divider>
        <div v-for="item in 10" :key="item" class="py-1">
          <div class="flex justify-between items-center text-xs text-gray-600">
            <span>专家：产能、库存、政策均有底 我国粮食安全有保障 </span>
            <span>2020年03月30日22:32 </span>
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
  name: "News"
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

.w-32 {
  width: 7.2rem;
}
/deep/ .el-divider--horizontal {
  margin: 8px 0;
}
/deep/ .el-image__inner {
  padding-left: 0;
}

/deep/ .el-tabs__item.is-active {
  @apply text-red-700;
}
/deep/.el-tabs__item:hover {
  @apply text-red-700;
}
/deep/.custom .el-tabs__active-bar.is-top {
  @apply bg-red-700;
}
.mt-272 {
  margin-top: 272px;
}
.mt-40 {
  margin-top: 40px;
}
.mb-40 {
  margin-bottom: 40px;
}
.mr-10 {
  margin-right: 10px;
}
.mr-20 {
  margin-right: 20px;
}
.opacity-25 {
  background: rgba(0, 0, 0, 0.65);
}
.bcg {
  background-image: url("../assets/bcg.png");
  background-repeat: no-repeat;
  background-color: #f5f5f5;
}

.w-50 {
  width: 100px;
}
.w-32 {
  width: 7.2rem;
}
.nav {
  width: 120px;
  height: 120px;
  border-radius: 6px;
  margin: 20px auto;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  font-size: 16px;
}

.banner {
  width: 640px;
  height: 334px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
}
.fast-door {
  width: 540px;
  height: 334px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
}

.content {
  width: 1200px;
  height: 587px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
}
.h-400 {
 
  height: 400px;
  
}

.friend-link {
  width: 1200px;
  height: 60px;
  line-height: 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding-left: 10px;
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
