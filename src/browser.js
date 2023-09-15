// Basic
const jolokia = new Jolokia('http://localhost:10001/actuator/hawtio/jolokia')
const response = jolokia.request({
  type: 'read',
  mbean: 'java.lang:type=Memory',
  attribute: 'HeapMemoryUsage',
  path: 'used',
})
console.log('Basic:', response)

// Simple
const value = jolokia.getAttribute('java.lang:type=Memory', 'HeapMemoryUsage', 'used')
console.log('Simple:', value)
