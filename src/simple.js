import Jolokia from 'jolokia.js'
import 'jolokia.js/simple'

const jolokia = new Jolokia('http://localhost:10001/actuator/hawtio/jolokia')
const value = jolokia.getAttribute('java.lang:type=Memory', 'HeapMemoryUsage', 'used')
console.log(value)
