# get-ip-cn
Get your public ip from https://uc.cn/ip

# Install

### With npm
```
npm install get-ip-cn
```

### With yarn
```
yarn add get-ip-cn
```

# Usage

```
const getIp = require('get-ip-cn')

(async () => {
  const ip = await getIp()
  console.log('My IP is: ' + ip)
})()
```
