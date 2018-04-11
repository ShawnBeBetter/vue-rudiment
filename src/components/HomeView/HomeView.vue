<template>
  <div class="home-view">
    <header>
      <img src="../../assets/HomeView/header_banner.png" alt="header">
    </header>
    <section class="content">
      <!-- <div class="search-wrp">
        <div class="icon-wrp">
          <icon name="search"></icon>
        </div>
        <input type="text" class="search" placeholder="输入患者名字搜索">
      </div> -->
      <div class="major">
        <div class="major-top">
          最近七天重点关注
          <span>4</span>
          <div class="clearMajor">
            <span>清除提醒</span> <icon name="close"></icon>
          </div>
        </div>
        <div class="major-content-wrp">
          <ul class="major-content clearfix">
            <li v-for="patient in patients" :key="patient.id" class="major-card">
              <div class="clearfix">
                <img :src="patient.photo" class="card-photo" alt="">
                <p class="card-name">{{patient.name}}</p>
              </div>
              <p class="card-text">
                {{patient.status}}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="filter-wrp">
        <ul>
          <li class="filter filter-active">全部</li>
          <li class="filter">星标</li>
          <li class="filter">高频低血糖</li>
          <li class="filter">低频测量</li>
        </ul>
        <p class="filter-icon">
          <icon name="search"></icon>
        </p>
      </div>
      <div class="patients-wrp">
        <ul class="patients">
          <li class="patient">
            <div class="clearfix">
              <img src="../../assets/HomeView/photo.png" class="card-photo" alt="">
              <div class="paient-text">
                <p class="patient-name">当当</p>
                <p class="patient-time">16/3/18  入组</p>
              </div>
            </div>
            <div class="patient-test clearfix">
              <p class="test-count"> 28/<span>42次</span></p>
              <p class="test-result"><span>低2</span><span>高7</span></p>
            </div>
            <p class="patient-bar clearfix">
            </p>
          </li>
        </ul>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Footer from '../Footer/Footer'
export default {
  name: 'patientManage',
  components: {
    Footer
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      patients: 'patients'
    })
  }
}
</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
