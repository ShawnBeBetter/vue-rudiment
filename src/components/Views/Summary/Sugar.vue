<template>
  <div class="page-invite">
    <h1>{{role==='director'?'科室控糖':'控糖情况'}}</h1>
  </div>
</template>
<script>
export default {
  name: 'Sugar',
  props: ['role'],
  components: {
  },
  data () {
    return {

    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
