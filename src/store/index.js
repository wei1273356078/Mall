import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addShop(state, payload) {
      let oldShop = null
      for (let item of state.cartList) {
        if (item.id == payload.id) {
          oldShop = item;
        }
      }
      if (oldShop) {
        oldShop.count += 1
      }else {
        payload.count = 1;
        state.check = true;
        state.cartList.push(payload)
      }
    }
  },
  getters: {
    cartList(state) {
      return state.cartList
    }
  },
  actions: {},
  modules: {}
});

export default store;
