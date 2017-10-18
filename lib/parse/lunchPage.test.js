const lunchPageParser = require('./lunchPage')
const lunchPageFixture = require('./lunchPage.fixture')

/* global describe, test, beforeAll, expect */

let lunch = null
beforeAll(() => {
  lunch = lunchPageParser.parseLunchPage(lunchPageFixture)
})

describe('lunchPageParser', () => {
  test('it should return a non-empty array', () => {
    expect(lunch.length).toBeGreaterThan(0)
  })
})
