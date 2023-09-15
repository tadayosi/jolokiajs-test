const cubism = require('cubism')
require('jolokia.js')
require('jolokia.js/cubism')
const $ = require('jquery')

describe('jolokia-cubism', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  test('basic metric', () => {
    $.ajax = jest.fn(() => ({
      status: 200,
      responseText: JSON.stringify({
        request: {
          type: 'read',
          mbean: 'java.lang:type=Memory',
          attribute: 'HeapMemoryUsage',
          path: 'used',
        },
        value: 12345,
        timestamp: 1694682372,
        status: 200,
      }),
    }))

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

    expect(metricMem).not.toBeNull()
  })
})
