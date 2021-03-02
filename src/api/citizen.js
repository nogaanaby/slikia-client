import request from '@/utils/request'

export function getCitizens() {
  return request({
    url: '/api/citizens/',
    method: 'get'
  })
}

export function getCitizen(id) {
  return request({
    url: `/api/citizens/${id}`,
    method: 'get',
    params: { id }
  })
}

export function createCitizen(data) {
  return request({
    url: `/api/citizens/`,
    method: 'post',
    params: data
  })
}

export function deleteCitizen(id) {
  return request({
    url: `/api/citizens/${id}`,
    method: 'delete',
    params: { id }
  })
}

export function editCitizen(id, data) {
  return request({
    url: `/api/citizens/${id}`,
    method: 'put',
    params: data
  })
}
