import request from '@/utils/request'

export function getMobileData() {
  return request({
    url: '/screen/mobile',
    method: 'get'
  })
}
