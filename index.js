var fetch = require('node-fetch')

module.exports = exports = async function getIp() {
  return fetch('https://ip.cn/api/index?type=0')
    .then(res => res.json())
    .then(json => json.ip);
}
