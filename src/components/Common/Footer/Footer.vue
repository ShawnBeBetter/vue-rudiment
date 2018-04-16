<template>
  <div>
    <ul class="footer">
      <router-link tag="li" :to="link.url" class="footer-item" v-for="(link,index) in links" :key="index">
        <icon class="link-icon" name="hospital-o"></icon>
        <a>{{link.text}}</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      links: [
        {
          text: '患者管理',
          url: '/'
        },
        {
          text: '统计',
          url: '/account'
        },
        {
          text: '邀请',
          url: '/invite'
        },
        {
          text: '设置',
          url: '/setting'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "./style.scss";

</style>
