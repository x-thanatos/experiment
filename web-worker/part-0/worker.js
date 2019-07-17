// window 不存在的
onerror = error => {
  throw error
}

const API_PREFIX = 'https://cnodejs.org/api/v1'
const request = new XMLHttpRequest()
request.open('GET', API_PREFIX + '/topics')
request.send()
request.onload = () => {
  if (request.status === 200) {
    postMessage(JSON.parse(request.response))
  }
}
