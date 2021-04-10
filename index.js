var fetch = require('node-fetch')

module.exports = exports = async function getIp() {
  var options = {
    hostname: 'ip.cn',
    port: 443,
    method: 'GET',
    path: '/api/index?type=0'
  }
  return fetch('https://ip.cn/api/index?type=0')
    .then(res => res.json())
    .then(json => json.ip);
}
