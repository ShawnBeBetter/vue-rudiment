<template>
  <div class="page-invite">
    <section class="patient-info clearfix">
      <div class="patient-photo">
        <img src="../../../assets/HomeView/photo.png" alt="">
      </div>
      <div class="patient-text">
        <p class="patient-name">切克闹</p>
        <p><span>2018年3月12日入组</span><span>男</span><span>52岁</span></p>
      </div>
      <div class="like-icon like">
        <icon name="heart"></icon>
      </div>
    </section>
    <section class="medicine-intro clearfix">
      <div class="intro-text">
        <p>优泌乐25</p>
        <p>每天两针-早晚餐前</p>
      </div>
      <div class="intro-link">
        <p><icon name="file-text" scale="1.3"></icon></p>
        <p>详情</p>
      </div>
    </section>
    <section class="test-detail">
      <div class="detail-text">
        <p>近7天测量8次 低糖2次</p>
        <p class="tag-wrp">
          <span class="tag">低血糖</span>
          <span class="tag">连续低糖</span>
          <span class="tag tag-active">高血糖</span>
        </p>
      </div>
      <div class="detail-chart">
        <ul class="tab-buttons">
          <li class="tab-button tab-active">血糖日历表</li>
          <li class="tab-button">血糖图</li>
        </ul>
        <ul class="calendar-sheet">
          <li class="sheet-row">
            <ul class="sheet-header">
              <li>日期</li>
              <li>空腹</li>
              <li>早餐后</li>
              <li>午餐前</li>
              <li>午餐后</li>
              <li>晚餐前</li>
              <li>晚餐后</li>
            </ul>
          </li>
          <li class="sheet-row">
            <ul>
              <li>03/15</li>
              <li>3.7</li>
              <li>11.8</li>
              <li>13.0</li>
              <li>14.6</li>
              <li>6.1</li>
              <li></li>
            </ul>
          </li>
          <li class="sheet-row">
            <ul>
              <li>03/14</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'PatientDetail',
  components: {
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
