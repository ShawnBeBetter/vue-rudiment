<template>
  <div class="page-invite">
    <div class="nav-tab">
      <ul class="tab-wrp">
        <li v-for="(tab,index) in tabs" :key="index"
          :class="currentTab===tab.name?'tab-active':''" @click="changeTab(tab.name)"
        > {{tab.text}}</li>
      </ul>
    </div>
    <component :role="role" :is="currentTab" keep-alive></component>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Footer from '../../Shared/Footer/Footer'
import Patient from './Patient.vue'
import Sugar from './Sugar.vue'
import Doctors from './Doctors.vue'
export default {
  name: 'Summary',
  components: {
    Footer,
    Patient,
    Sugar,
    Doctors
  },
  data () {
    return {
      currentTab: 'Sugar',
      tabs: [{
        name: 'Sugar',
        text: '控糖情况'
      },
      {
        name: 'Patient',
        text: '患者统计'
      }]
    }
  },
  computed: {
    ...mapGetters({
      role: 'role'
    })
  },
  methods: {
    changeTab: function (tab) {
      this.currentTab = tab
    }
  },
  beforeMount: function () {
    if (this.role === 'director') {
      this.tabs = [{
        name: 'Sugar',
        text: '科室糖控'
      },
      {
        name: 'Patient',
        text: '患者统计'
      },
      {
        name: 'Doctors',
        text: '医生列表'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
