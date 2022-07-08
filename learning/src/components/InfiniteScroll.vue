<template>
  <div class="scrolling-component flex h-full flex-col items-center justify-center" ref="scrollComponent">
    <div v-for="(post, idx) in posts" :key="idx" class="m-3 rounded-xl border bg-white p-5 text-black shadow-lg">
      <hr />
      <div class="my-3">
        <h1>{{ post.title }}</h1>
        <p>{{ post.topic }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useStore } from '../store/market.js'

const store = useStore()

const posts = ref(store.getPosts(10))
const scrollComponent = ref(null)
const cnt = ref(1)

const loadMorePosts = () => {
  let newPosts = store.getPosts(10)
  posts.value.push(...newPosts)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (e) => {
  let element = scrollComponent.value
  // if (cnt.value < 5) {
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      loadMorePosts()
      cnt.value++
    }
  // }
}
</script>
