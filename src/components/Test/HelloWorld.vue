<template>
  <div class="hello">
    <div class="main">
      <h1>{{ msg.length>4 ? msg : '多说点' }}</h1>
      <Product />
      <!-- <h1>{{ reversedMessage }}</h1>
      <h2 v-if="isButtonDisabled">like dangerousHtml-(v-html): <span v-html="rawHtml"></span></h2>
      <h2 v-else> 不然你要显示什么</h2>
      <input type="button" value="change msg" @click="handleClick"> -->
      <input type="text" v-model="question">
      <h2>{{ answer }}</h2>
      <!-- <h2 class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }">Essential Links</h2>
      <h2 v-bind:class="classObject">Ecosystem</h2>
      <li v-for="n in even(numbers)" v-if="n>2" :key="n">{{ n }}</li> -->
    </div>
    <ShoppingCar />
    <FooterElement :message='question' :clearQuestion='clearQuestion'></FooterElement>
  </div>
</template>
<script>
import _ from 'lodash'
import axios from 'axios'
import FooterElement from './FooterElement'
import Product from './Product'
import ShoppingCar from './ShoppingCar'
export default {
  name: 'HelloWorld',
  components: {
    FooterElement,
    Product,
    ShoppingCar
  },
  data () {
    return {
      msg: '购物车实例',
      rawHtml: '<span style="color:red">123</span>',
      isButtonDisabled: true,
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      isActive: true,
      hasError: false,
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.msg.split('').reverse().join('')
    },
    classObject: function () {
      return {
        active: this.isActive && !this.hasError,
        'text-danger': this.error && this.hasError
      }
    }
  },
  methods: {
    handleClick: function () {
      this.isButtonDisabled = !this.isButtonDisabled
    },
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为判定用户停止输入等待的毫秒数
      500
    ),
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    clearQuestion: function (text) {
      this.question = text
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  border: 1px solid #ccc;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  color: #0cc;
}
</style>
