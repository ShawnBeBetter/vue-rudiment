<template>
  <ul>
    <li v-for="(product,index) in products" :key="index">
      {{ product.title }} - {{ product.price }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
