const slackMessage = require('./slack')
const lunchList = require('./slack.fixture')

/* global describe, test, beforeEach, expect */

describe('slackMessage', () => {
  describe('getSlackMessage', () => {
    test.only('GIVEN an array it should return a string', () => {
      const days = 2
      const message = slackMessage.getSlackMessage(lunchList, days)
      expect(typeof message).toBe('string')
    })
  })
})
