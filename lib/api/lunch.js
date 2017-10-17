const fetch = require('node-fetch')

const getLunchPage = () =>
  fetch(
    'https://iss.inmsystems.com/TakeAway/DanskeBankEjby963/Main/Products/1'
  ).then(res => res.text())

module.exports = {
  getLunchPage: getLunchPage
}
