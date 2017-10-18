const SlackBot = require('slackbots')
const fetch = require('node-fetch')
const express = require('express')
const favicon = require('serve-favicon')
const lunchApi = require('./lib/api/lunch')
const lunchParser = require('./lib/parse/lunchPage')
const slackMessage = require('./lib/message/slack')

const app = express()
let lunchBotUserId = null // eslint-disable-line no-var

// every 5 minutes (300000)
setInterval(() => fetch('http://127.0.0.1'), 300000) // TODO

app.get('/', (req, res) => res.sendStatus(200))

app.use(favicon(`${__dirname}/public/favicon.ico`))

app.listen(process.env.PORT || 3000)

const lunchBot = new SlackBot({
  token: process.env.SLACK_TOKEN,
  name: 'lunchbot'
})

// more information about additional params https://api.slack.com/methods/chat.postMessage
const params = {
  icon_emoji: ':ok_hand:'
}

lunchBot.on('start', () => {
  lunchBot.getUser(process.env.BOT_NAME).then(user => {
    lunchBotUserId = user.id
    if (lunchBotUserId) {
      console.log('Initialized bot user with id', lunchBotUserId)
    } else {
      console.log(`Failed to find bot with username ${process.env.BOT_NAME}`)
    }
  })
})

function getChannelById (channelId) {
  // console.log('channels', channels);
  console.log('channelId', channelId)
  const channelRes = lunchBot.channels.filter(item => item.id === channelId)[0]
  console.log('found this channel: ', channelRes.name)
  return channelRes.name
}

// all ingoing events https://api.slack.com/rtm
lunchBot.on('message', data => {
  if (data.type === 'message') {
    console.log(JSON.stringify(data))
  }
  if (
    lunchBotUserId &&
    data &&
    data.type === 'message' &&
    (data.text.includes(`<@${lunchBotUserId}>`) ||
      data.text.includes(`@${process.env.BOT_NAME}`))
  ) {
    const channel = getChannelById(data.channel)
    const parsedMessage = { days: 1 }

    lunchApi
      .getLunchPage()
      .then(lunchParser.parseLunchPage)
      .then(lunchList =>
        slackMessage.getSlackMessage(lunchList, parsedMessage.days)
      )
      .then(message => lunchBot.postMessageToChannel(channel, message, params))
      .catch(error => console.log('error: ', error))
  }
})
