import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStore = defineStore('market', {
  state: () => ({
    market: 24,
    cart: 0,
    userData: null,
  }),
  getters: {
    availableItems(state) {
      return state.market - state.cart
    },
  },
  actions: {
    getPosts(num) {
      try {
        const fruits = ['Apple', 'Banana', 'Orange', 'Pear', 'pineapple', 'pinia']
        let genPosts = []

        for (let i = 0; i < num; i++) {
          genPosts.push({
            title: fruits[i % fruits.length],
            topic: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat laudantium facilis cupiditate, sequi tempora quam.',
          })
        }
        return genPosts
      } catch (error) {
        console.log(error)
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
