const { JSDOM } = require('jsdom')
const jquery = require('jquery')

const { window } = new JSDOM('')
const $ = jquery(window)

const jolokiaUrl = 'http://localhost:10001/actuator/hawtio/jolokia'

// ajax
$.ajax(`${jolokiaUrl}/read/java.lang:type=Memory/HeapMemoryUsage/used`).done(data => {
  const response = JSON.parse(data)
  console.log('ajax:', response)
})

// extend
const obj = $.extend({ a: 1 }, { b: 2 }, { c: 3 })
console.log('extend:', obj)

// each
$.each(['a', 'b', 'c'], (i, v) => console.log('each:', i, v))
