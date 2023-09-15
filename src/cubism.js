import cubism from 'cubism'
import 'jolokia.js'
import 'jolokia.js/cubism'

const context = cubism.context()
const jolokia = context.jolokia('/jolokia')
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
