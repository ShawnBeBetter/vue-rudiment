<template>
  <div class="home-view">
    <header>
      <img src="../../../assets/HomeView/header_banner.png" alt="header">
    </header>
    <section class="content">
      <div class="filter-wrp">
        <ul class="clearfix">
          <li class="filter" :class="currentFilter === filter.rule?'filter-active':''"
            v-for="(filter,index) in filters" :key="index"
            @click="changeFilter(filter.rule)">
            {{filter.text}}
          </li>
        </ul>
        <p class="filter-icon">
          <icon name="search"></icon>
        </p>
      </div>
      <div class="patients-wrp">
        <ul class="patients">
          <li class="patient" v-for="patient in sortPatients" :key="patient.id">
            <router-link :to="'/patient-detail/'+patient.id">
              <div class="clearfix">
                <img :src="patient.photo" class="patient-photo" alt="">
                <div class="patient-top">
                  <span class="enroll-time">入组{{patient.enrollDays}}天</span>
                  <icon :class="patient.isLike?'like':'unlike'" :name="patient.isLike?'heart':'heart-o'"></icon>
                </div>
              </div>
              <div class="clearfix">
                <div class="patient-info">
                  <p>{{patient.name}}</p>
                  <span>{{patient.sex}}</span>
                  <span class="patient-age">{{patient.age}}岁</span>
                </div>
                <div class="patient-test">
                  <p>近7天测量{{patient.testCount}}次 低糖{{patient.lowCount}}次</p>
                  <p class="tags">
                    <span v-for="(tag,index) in patient.tags" :key="index" class="tag">
                      {{tag}}
                    </span>
                  </p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Footer from '../../Shared/Footer/Footer'
export default {
  name: 'patientManage',
  components: {
    Footer
  },
  data () {
    return {
      sortPatients: [],
      currentFilter: 'default',
      filters: [
        {
          rule: 'default',
          text: '全部'
        },
        {
          rule: 'lowCount',
          text: '七天低糖次数'
        },
        {
          rule: 'testCount',
          text: '七天测量次数'
        },
        {
          rule: 'enrollDays',
          text: '入组时间'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      patients: 'patients'
    })
  },
  methods: {
    sortList (a, b) {
      return b[this.currentFilter] - a[this.currentFilter]
    },
    changeFilter (rule) {
      this.currentFilter = rule
      this.sortPatients = this.patients.sort(this.sortList)
    }
  },
  beforeMount () {
    this.sortPatients = this.patients.sort(this.sortList)
  }
}
</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
