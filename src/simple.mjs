import Jolokia from 'jolokia.js'
import 'jolokia.js/simple'

const jolokiaUrl = 'http://localhost:10001/actuator/hawtio/jolokia'

const jolokia = new Jolokia(jolokiaUrl)
const value = jolokia.getAttribute('java.lang:type=Memory', 'HeapMemoryUsage', 'used')
console.log('Heap Memory used:', value)
