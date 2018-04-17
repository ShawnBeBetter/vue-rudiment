<template>
  <div class="page-setting">
    <div class="user clearfix">
      <img class="photo" src="../../../assets/HomeView/photo.png" alt="">
      <div class="user-info">
        <p>早上好,</p>
        <p><span>陈颖</span> 医生</p>
      </div>
    </div>
    <div class="setting-card">
      <ul class="settings">
        <li class="setting-item">这是我要显示的内容</li>
        <li class="setting-item">这是我要显示的内容</li>
        <li class="setting-item">这是我要显示的内容</li>
        <li class="setting-item">这是我要显示的内容</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '../../Shared/Footer/Footer'
export default {
  name: 'Setting',
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
