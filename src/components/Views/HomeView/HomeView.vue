<template>
  <div class="home-view">
    <header>
      <transition-group tag="ul" class="news" name="fade">
        <li v-for="(newItem,index) in news" :key="index"
          v-show="index===currentIndex">
          {{newItem}}
        </li>
      </transition-group>
    </header>
    <section class="content">
      <div class="filter-wrp">
        <ul class="clearfix">
          <li class="filter" :class="currentFilter === filter.rule?'filter-active':''"
            v-for="(filter,index) in filters" :key="index"
            @click="changeFilter(filter.rule)">
            {{filter.text}}
            <span class="sort-icon-asc" :class="currentSort==='asc'?'active-icon':''">
              <icon name="sort-asc"></icon>
            </span>
            <span class="sort-icon-desc" :class="currentSort==='desc'?'active-icon':''">
              <icon name="sort-desc"></icon>
            </span>
          </li>
        </ul>
        <p class="filter-icon" v-show="!searchPatient" @click="showtags">
          <icon name="search"></icon>
        </p>
        <p class="filter-text" v-show="searchPatient">
          <span class="search-icon"><icon name="search" scale="1.1"></icon></span>
          <input type="text" placeholder="搜索患者" v-model="searchValue">
          <span class="search-close" @click="showtags">
            {{!searchValue ? '关闭' : '搜索'}}
          </span>
        </p>
      </div>
      <div class="filter-tags" v-show="searchPatient">
        <span class="filter-tag filter-tag-active">10多岁</span>
        <span class="filter-tag">20多岁</span>
        <span class="filter-tag">30多岁</span>
        <span class="filter-tag">40多岁</span>
        <span class="filter-tag">50多岁</span>
        <span class="filter-tag">60多岁</span>
      </div>
      <div class="patients-wrp">
        <ul class="patients">
          <li class="patient" v-for="patient in sortPatients"
            :key="patient.id" @click="goToDetail(patient.id)">
            <div class="clearfix">
              <img :src="patient.photo" class="patient-photo" alt="">
              <div class="patient-top">
                <span class="enroll-time">入组{{patient.enrollDays}}天</span>
                <span @click.stop="handleLike(patient.id)">
                  <icon :class="patient.isLike?'like':'unlike'"
                    :name="patient.isLike?'heart':'heart-o'"
                  ></icon>
                </span>
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
      timer: null,
      currentFilter: 'default',
      currentIndex: 0,
      searchPatient: false,
      searchValue: '',
      currentSort: 'desc',
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
      patients: 'patients',
      news: 'news'
    })
  },
  methods: {
    sortList (a, b) {
      let result = this.currentSort === 'desc' ? b[this.currentFilter] - a[this.currentFilter] : a[this.currentFilter] - b[this.currentFilter]
      if (result !== 0) {
        return result
      } else {
        return b.enrollDays - a.enrollDays
      }
    },
    goToDetail (patientId) {
      this.$router.push('/patient-detail/' + patientId)
    },
    autoPlay () {
      this.currentIndex++
      if (this.currentIndex >= this.news.length) {
        this.currentIndex = 0
      }
    },
    showtags () {
      if (!this.searchValue) {
        this.searchPatient = !this.searchPatient
      } else {
        this.search()
        this.searchValue = ''
      }
    },
    search () {
      let reg = new RegExp(this.searchValue.trim())
      this.sortPatients = this.patients.filter((patient) => {
        return reg.test(patient.name)
      })
    },
    changeFilter (rule) {
      if (rule === this.currentFilter) {
        this.currentSort = this.currentSort === 'asc' ? 'desc' : 'asc'
      } else {
        this.currentSort = 'desc'
      }
      this.currentFilter = rule
      this.sortPatients = this.patients.sort(this.sortList)
    },
    handleLike (id) {
      this.$store.dispatch('handleLike', id)
    }
  },
  beforeMount () {
    this.sortPatients = this.patients.sort(this.sortList)
  },
  mounted () {
    this.timer = setInterval(() => {
      this.autoPlay()
    }, 3000)
  }
}
</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
