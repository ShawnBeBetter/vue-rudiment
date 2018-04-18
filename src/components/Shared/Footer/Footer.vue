<template>
  <div>
    <ul class="footer">
      <router-link tag="li" :to="link.url" class="footer-item"
        v-for="(link,index) in links" :key="index" exact>
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
          text: '患者',
          url: '/'
        },
        {
          text: '概要',
          url: '/summary'
        },
        {
          text: '邀请',
          url: '/invitation'
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
