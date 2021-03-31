import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
const URL = `http://localhost:3004/person`;

export default new Vuex.Store({
  state: {
    member: []
  },
  mutations: {
    updateMember(state, member) {
      state.member = member
    }
  },
  actions: {
    async loadData() {
      try {
        const info = await axios.get(URL)
        return info.data
      } catch (e) {
        throw e
      }
    },
    async loadDataById({commit}, id) {
      try {
        const { data } = await axios.get(URL + '/' + id ) 
        commit('updateMember', data)
        return data
      } catch (e) {
        throw e
      }
    },
    async updateData({commit}, {name, department, position, gender, date, id}) {
      const info = {
        name: name,
        department: department,
        position: position,
        gender: gender,
        date: date,
        id: id
      }
      try {        
        const { data } = await axios.put(URL + '/' + id, info)
        return data
      } catch (e) {
        throw e
      } 
    },
    async createData({commit}, {name, department, position, gender, date, id}) {
      const info = {
        name: name,
        department: department,
        position: position,
        gender: gender,
        date: date,
        id
      }
      try {        
        const { data } = await axios.post(URL, info)
        return data
      } catch (e) {
        throw e
      } 
    },
    async deleteData({commit}, id) {
      try {
        const { data } = await axios.delete(URL + '/' + id)
        return data
      } catch (e) {
        throw e
      }
    } 

  },
  getters: {
    MEMBER: state => {
      return state.member
    }
  },
  modules: {
  }
})
