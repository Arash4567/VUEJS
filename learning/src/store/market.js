import {defineStore, acceptHMRUpdate} from 'pinia'

export const useStore = defineStore('market', {
  state: () => ({
    market: 24,
    cart: 0,
    userData: null
  }),
  getters: {
    availableItems (state) {
      return state.market - state.cart
    } 
  },
  actions: {
    // async allUsers() {
    //   try {
    //     this.userData = await axios.get("/", (req, res) => {
    //       res.data
    //     })
    //   } catch (error) {
        
    //   }
    // }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
} 