import cubism from 'cubism'
import 'jolokia.js'
import 'jolokia.js/cubism'

console.warn('WARNING: Running Cubism on Node does not make much sense. It should fail.')

const jolokiaUrl = 'http://localhost:10001/actuator/hawtio/jolokia'

const context = cubism.context()
const jolokia = context.jolokia(jolokiaUrl)
const metricMem = jolokia.metric(
  {
    type: 'read',
    mbean: 'java.lang:type=Memory',
    attribute: 'HeapMemoryUsage',
    path: 'used',
  },
  'HeapMemory Usage',
)
console.log(metricMem)
