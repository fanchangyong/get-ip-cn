var fetch = require('node-fetch')

module.exports = exports = async function getIp() {
  const res = await fetch('https://uc.cn/ip')
  const text = await res.text()
  const arr = text.split(':')
  return arr[1];
}

getIp()
