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
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'patientManage',
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
