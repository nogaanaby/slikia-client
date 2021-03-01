import { example, login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  userName: '',
  userType: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_NAME: (state, userName) => {
    state.userName = userName
  },
  SET_USER_TYPE: (state, userType) => {
    state.userType = userType
  },
}

const actions = {
  example({ commit }) {
    return new Promise((resolve, reject) => {
      example().then(response => {
        console.log('from store: ', response)
        //  commit('SET_USER_NAME', response.useName)
        //  commit('SET_USER_TYPE', response.useType)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logink
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userName: username.trim(), password: password }).then(response => {
        console.log(response)
        const data = response
        commit('SET_USER_NAME', data.userName)
        commit('SET_USER_TYPE', data.userType)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve(data)
      }).catch(error => {
        console.log('error from store')
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state, dispatch }) {
    if(state.userType=='' || state.userName==''){
      return new Promise((resolve, reject) => {
          getInfo(state.token).then(response => {
            const data= response
            if (!data) {
              alert("no info here")
              dispatch('user/logout');
              resolve()
            }
            console.log(response)
            commit('SET_USER_NAME', data.userName)
            commit('SET_USER_TYPE', data.userType)
            resolve(data)
          }).catch(error => {
            reject(error)
          })
        
      })
    }else{
      return state
    }
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        //commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      //commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  // async changeRoles({ commit, dispatch }, role) {
  //   const token = role + '-token'

  //   commit('SET_TOKEN', token)
  //   setToken(token)

  //   const { roles } = await dispatch('getInfo')

  //   resetRouter()

  //   // generate accessible routes map based on roles
  //   const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
  //   // dynamically add accessible routes
  //   router.addRoutes(accessRoutes)

  //   // reset visited views and cached views
  //   dispatch('tagsView/delAllViews', null, { root: true })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
