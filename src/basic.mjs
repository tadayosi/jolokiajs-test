import Jolokia from 'jolokia.js'

const jolokiaUrl = 'http://localhost:10001/actuator/hawtio/jolokia'

const jolokia = new Jolokia(jolokiaUrl)

const response1 = jolokia.request({
  type: 'read',
  mbean: 'java.lang:type=Memory',
  attribute: 'HeapMemoryUsage',
  path: 'used',
})
console.log('read:', response1)

const response2 = jolokia.request({
  type: 'exec',
  mbean: 'java.lang:type=Memory',
  operation: 'gc()',
})
console.log('exec:', response2)
