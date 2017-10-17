const lunchApi = require('./lib/api/lunch')
const lunchParser = require('./lib/parse/lunchPage')

const getLunch = () =>
  lunchApi
    .getLunchPage()
    .then(lunchParser.parseLunchPage)
    .then(JSON.stringify)
    .then(console.log)

getLunch()
