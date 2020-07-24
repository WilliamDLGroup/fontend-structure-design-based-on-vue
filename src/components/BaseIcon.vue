<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class=" inline-block"
    :width="width"
    :height="height"
  >
    <use :xlink:href="svgName" />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    }
  },
  computed: {
    svgName () {
      return `#icon-${this.iconName}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
