import { getCitizens, getCitizen } from '@/api/citizen'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  id: 0,
  firstName: '',
  lastName: '',
  budgetId: 0
}

const mutations = {
  SET_FIRST_NAME: (state, firstName) => {
    state.firstName = firstName
  },
  SET_LAST_NAME: (state, lastName) => {
    state.lastName = lastName
  },
  SET_BUDGET_ID: (state, budgetId) => {
    state.budgetId = budgetId
  }
}

const actions = {
  getCitizen({ commit, state }) {
    return new Promise((resolve, reject) => {
      getCitizens(state.id).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { firstName, lastName, budgetId } = data

        commit('SET_FIRST_NAME', firstName)
        commit('SET_LAST_NAME', lastName)
        commit('SET_BUDGET_ID', budgetId)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getCitizens({ commit, state }) {
    return new Promise((resolve, reject) => {
      getCitizens(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        // const { roles, name, avatar, introduction } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
