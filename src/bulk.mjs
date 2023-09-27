import Jolokia from 'jolokia.js'

const jolokiaUrl = 'http://localhost:10001/actuator/hawtio/jolokia'

const jolokia = new Jolokia(jolokiaUrl)

const bulkRequest = [
  { type: 'read', mbean: 'java.lang:type=Memory', attribute: 'HeapMemoryUsage', path: 'used' },
  { type: 'exec', mbean: 'java.lang:type=Memory', operation: 'gc()' },
]
const response1 = jolokia.request(bulkRequest)
console.log('sync:', response1)

const response2 = jolokia.request(bulkRequest, {
  success: response => console.log('callback:', response),
})
console.log('async:', response2)
