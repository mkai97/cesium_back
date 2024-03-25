<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-h-50 tw-bg-gray-100 tw-w-full">
    <div class="tw-text-3xl">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
