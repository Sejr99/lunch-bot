const Botkit = require('botkit')
const GoogleImages = require('google-images')

const lunchApi = require('./lib/api/lunch')
const lunchParser = require('./lib/parse/lunchPage')
const slackMessage = require('./lib/message/slack')

const searchClient = new GoogleImages(
  process.env.SEARCH_ENGINE_ID,
  process.env.GOOGLE_API_KEY
)

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
  let firstMainCourse
  lunchApi
    .getLunchPage()
    .then(lunchParser.parseLunchPage)
    .then(lunchList => {
      firstMainCourse = lunchList.find(
        item => item.header.toUpperCase() === 'DAGENS VARME RET'
      )
      return slackMessage.getSlackMessage(lunchList, parsedMessage.days)
    })
    .then(text => bot.reply(message, text))
    .then(() => {
      if (firstMainCourse && firstMainCourse.description) {
        return searchClient.search(firstMainCourse.description)
      }
    })
    .then(searchResults => {
      if (searchResults.length && searchResults[0].url) {
        bot.reply(message, searchResults[0].url)
      }
    })
    .catch(error => console.log('error: ', error))
})
