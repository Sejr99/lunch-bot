const lunchPageParser = require('./lunchPage')
const lunchPageFixture = require('./lunchPage.fixture')

/* global describe, test, beforeAll, expect */

let lunch = null
beforeAll(() => {
  lunch = lunchPageParser.parseLunchPage(lunchPageFixture)
})

describe('lunchPageParser', () => {
  test('it should return a array of nine items', () => {
    expect(lunch.length).toBe(9)
    expect(Array.isArray(lunch)).toBe(true)
  })

  test('the array should include objects with header and description', () => {
    lunch.forEach(item => {
      expect(item).toEqual(expect.objectContaining({
        header: expect.any(String),
        description: expect.any(String)
      }))
    })
  })
})
