<template>
  <div>
    <h2>父元素传来的值: {{fatherMsg}}</h2>
    <input type="button" value="让你爸别哔哔" @click="clearQuestion('好吧我闭嘴!')">
    <ul>
      <li v-for="(link,index) in links" :key="index">
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
          url: '/patientManage'
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
  computed: {
    fatherMsg: function () {
      return parseInt(this.message) ? parseInt(this.message) + 100 : '你爸啥也没问'
    }
  }
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
