import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'api/user/login',
    method: 'post',
    data
  })
}

export function example() {
  return request({
    url: 'api/user/1',
    method: 'get'
  })
}

export function getInfo(token) {
  return request({
    url: `/api/user/getInfo/${token}`,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: 'api/user/logout',
    method: 'post'
  })
}
