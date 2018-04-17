<template>
  <div class="page-invite">
    <div class="card-top clearfix">
      <p class="card-num">
        剩余3张邀请卡
      </p>
      <p class="card-link">
        <router-link to="/card-record">查看发卡历史及审批状态</router-link>
      </p>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '../../Shared/Footer/Footer'
export default {
  name: 'Invitation',
  components: {
    Footer
  },
  data () {
    return {

    }
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
