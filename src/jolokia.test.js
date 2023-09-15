const Jolokia = require('jolokia.js')
const $ = require('jquery')

describe('jolokia', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  test('basic request', () => {
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

    const jolokia = new Jolokia('/jolokia')
    const response = jolokia.request({
      type: 'read',
      mbean: 'java.lang:type=Memory',
      attribute: 'HeapMemoryUsage',
      path: 'used',
    })

    expect(response.value).toEqual(12345)
  })
})
