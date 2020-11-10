import request from '@/utils/request'

export function getCitizens() {
  return request({
    url: '/api/citizens/',
    method: 'get',
    params: { }
  })
}

export function getCitizen(id) {
  return request({
    url: `/api/citizens/${id}`,
    method: 'get',
    params: { id }
  })
}

