import Vue from 'vue'
import Vuex from 'vuex'
import generateData from '../../createDataForChart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataForChart: null,
    dataForStatistic: null
  },
  mutations: {
    fetchData (state, data) {
      state.dataForChart = data
    },
    dataForStatistic (state, data) {
      state.dataForStatistic = data
    }
  },
  actions: {
    fetchData ({ commit }) {
      const data = generateData()
      commit('fetchData', data)
    },
    dataForStatistic ({ commit }, payload) {
      commit('dataForStatistic', payload)
    }
  },
  getters: {
    dataForChart: state => state.dataForChart,
    statistics: state => state.dataForStatistic
  }
})
