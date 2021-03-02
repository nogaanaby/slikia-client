import { getCitizens, getCitizen, createCitizen, deleteCitizen, editCitizen } from '@/api/citizen'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  id: 0,
  firstName: '',
  lastName: '',
  budgetId: 0,
  citizens: []
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
  },
  SET_CITIZENS: (state, citizens) => {
    state.citizens = citizens
  },
  DELETE_CITIZEN: (state, citizenId) => {
    state.citizens = state.citizens.filter((citizen) => citizen.id != citizenId)
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
      getCitizens().then(response => {
        const data = response

        if (!data) {
          reject('no citizens or internet connection')
        }

        commit('SET_CITIZENS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteCitizen({ commit, state }, citizenId) {
    return new Promise((resolve, reject) => {
      deleteCitizen(citizenId).then(response => {
        const data = response

        if (!data || data.status == 500) {
          reject('could not delete citizen')
        }

        commit('DELETE_CITIZEN', citizenId)
        resolve(state.citizens)
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
