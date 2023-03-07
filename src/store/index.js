import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    colourCode: "blue",
  },
  getters: {},
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber;
    },
    setColourCode(state, newValue) {
      state.colourCode = newValue;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((res) => {
        commit("increaseCounter", res.data);
      });
    },
    decreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((res) => {
        commit("decreaseCounter", res.data);
      });
    },
    setColourCode({ commit }, newValue) {
      commit("setColourCode", newValue);
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
