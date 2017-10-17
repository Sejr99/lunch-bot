const lunchApi = require('./lunch')

/* global describe, test, beforeEach, expect */

describe('lunchApi', () => {
  describe('getLunchPage()', () => {
    let response = null
    beforeEach(() => {
      response = lunchApi.getLunchPage()
    })

    test('it should return something', () => {
      expect(response).not.toBe(null)
    })
  })
})
