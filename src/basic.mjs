import Jolokia from 'jolokia.js'

const jolokiaUrl = 'http://localhost:10001/actuator/hawtio/jolokia'

const jolokia = new Jolokia(jolokiaUrl)
const response = jolokia.request({
  type: 'read',
  mbean: 'java.lang:type=Memory',
  attribute: 'HeapMemoryUsage',
  path: 'used',
})
console.log(response)
