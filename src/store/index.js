import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  userinfo: {
    name: 'liuliang',
    id: '1234567'
  }
}
const actions = {

  changUserInfo (context, args) {
    context.commit('changUserInfo', args)
  }

}
const mutations = {
  changUserInfo (state, payload) {
    state.userinfo.name = payload.name
  }
}
const modules = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
export default store
