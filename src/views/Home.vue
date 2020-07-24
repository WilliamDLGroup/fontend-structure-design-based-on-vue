<template>
  <div class="home ">
    <BaseIcon
      class="block mx-auto "
      iconName="task"
      width="200"
      height="200"
    ></BaseIcon>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <BaseTailWind></BaseTailWind>
    <BaseForm></BaseForm>
    <BaseTailWind></BaseTailWind>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.bg-gray-100 {
  background-color: #f7fafc;
}
</style>
