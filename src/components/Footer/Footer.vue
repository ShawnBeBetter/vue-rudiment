<template>
  <div>
    <ul class="footer">
      <li class="footer-item" v-for="(link,index) in links" :key="index">
        <a :href="link.url">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FooterElement',
  props: ['message', 'clearQuestion'],
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
  },
}
</script>
<style scoped>
ul {
  background-color: aqua;
}
li {
  list-style: none;
}
</style>
