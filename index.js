const Botkit = require('botkit')
const lunchApi = require('./lib/api/lunch')
const lunchParser = require('./lib/parse/lunchPage')
const slackMessage = require('./lib/message/slack')

// init slack bot
const lunchBot = Botkit.slackbot({
  retry: 'Infinity',
  debug: false
})

lunchBot
  .spawn({
    token: process.env.SLACK_TOKEN
  })
  .startRTM(err => {
    if (err) {
      throw new Error(err)
    } else {
      console.log('Lunch bot is up and running...')
    }
  })

lunchBot.on('direct_mention', (bot, message) => {
  console.log(message)
  const parsedMessage = { days: 1 }

  lunchApi
    .getLunchPage()
    .then(lunchParser.parseLunchPage)
    .then(lunchList =>
      slackMessage.getSlackMessage(lunchList, parsedMessage.days)
    )
    .then(text => bot.reply(message, text))
    .catch(error => console.log('error: ', error))
})
