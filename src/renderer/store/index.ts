import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('counter', {
  persist: true,
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
