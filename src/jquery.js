const jsdom = require('jsdom')
const jquery = require('jquery')

const dom = new jsdom.JSDOM('')
const $ = jquery(dom.window)

const jolokiaUrl = 'http://localhost:10001/actuator/hawtio/jolokia'

$.ajax(`${jolokiaUrl}/read/java.lang:type=Memory/HeapMemoryUsage/used`).done(data => {
  const response = JSON.parse(data)
  console.log(response)
})
