const Jolokia = require('jolokia.js')

const jolokia = new Jolokia('http://localhost:10001/actuator/hawtio/jolokia')
const response = jolokia.request({
  type: 'read',
  mbean: 'java.lang:type=Memory',
  attribute: 'HeapMemoryUsage',
  path: 'used',
})
console.log(response)
