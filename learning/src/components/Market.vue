<template>
  <div class="container mx-auto mt-5">
    <h1 class="my-3 text-center text-5xl font-extrabold text-blue-600">Marketplace</h1>
    <hr class="my-3" />
    <div class="grid grid-cols-3 gap-10">
      <div class="rounded-lg p-3 shadow-lg">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
              <MarketIcon class="text-3xl" />
            </div>
            <p class="ml-2 text-xl font-bold">Market</p>
          </div>
          <div class="badge rounded-full bg-indigo-600 px-3 py-1 text-lg font-semibold text-white">{{ store.availableItems }}</div>
        </div>
        <div class="mt-5 flex flex-wrap items-center justify-center">
          <div v-for="(item, idx) in store.availableItems" :key="idx" class="m-2">
            <img src="../assets/pinia.svg" class="w-10" :alt="'Pinia' + item" />
          </div>
        </div>
        <div class="mt-2 flex items-center justify-end">
          <button @click="addToCart()" class="rounded-lg bg-green-500 px-3 py-2 text-white">Add to cart</button>
        </div>
      </div>
      <div class="rounded-lg p-3 shadow-lg">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
              <CartIcon class="text-3xl" />
            </div>
            <p class="ml-2 text-xl font-bold">Your Cart</p>
          </div>
          <div class="badge rounded-full bg-indigo-600 px-3 py-1 text-lg font-semibold text-white">{{ store.cart }}</div>
        </div>
        <div class="mt-5 flex flex-wrap items-center justify-center">
          <div v-for="(item, idx) in store.cart" :key="idx" class="m-2">
            <img src="../assets/pinia.svg" class="w-10" :alt="'Pinia' + item" />
          </div>
        </div>
        <div class="mt-2 flex items-center justify-end" v-show="store.cart !== 0">
          <button @click="removeToCart()" class="rounded-lg bg-red-500 px-3 py-2 text-white">Remove</button>
        </div>
      </div>
      <div class="rounded-lg p-3 shadow-lg">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
              <CheckoutIcon class="text-3xl" />
            </div>
            <p class="ml-2 text-xl font-bold">Checkout</p>
          </div>
        </div>
        <div class="mt-5 flex items-end text-3xl" v-show="store.cart !== 0">
          <img src="../assets/pinia.svg" class="w-10 mr-2" alt="Pinia" /> x <span class="ml-1">{{store.cart}}</span>
        </div>
        <div class="font-extrabold mt-5 text-2xl" v-show="store.cart !== 0">
          Total price: {{store.cart * 2}}$
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MarketIcon from '../assets/icons/MarketIcon.vue'
import CartIcon from '../assets/icons/CartIcon.vue'
import CheckoutIcon from '../assets/icons/CheckoutIcon.vue'
import { useStore } from '../store/market.js'
import { ref } from 'vue'

const amount = ref(0)
const remove = ref(0)
const store = useStore()

const addToCart = () => {
  if (store.availableItems !== 0) {
    store.cart += 1
  }
}
const removeToCart = () => {
  if (store.cart !== 0) {
    store.cart -= 1
  }
}
</script>
