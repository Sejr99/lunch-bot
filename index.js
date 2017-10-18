const lunchApi = require('./lib/api/lunch')
const lunchParser = require('./lib/parse/lunchPage')
const slackMessage = require('./lib/message/slack');

const days = 5;

const getLunch = () =>
  lunchApi
    .getLunchPage()
    .then(lunchParser.parseLunchPage)
    .then((lunchList) => slackMessage.getSlackMessage(lunchList, days))
    .then(console.log)

getLunch()
