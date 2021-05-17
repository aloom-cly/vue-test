import request from '@/utils/request'

export function login(data) {
  // console.log(data)
  return request({
    url: '/vue-test/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-test/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-test/user/logout',
    method: 'post'
  })
}
