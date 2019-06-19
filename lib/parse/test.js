const parser = require("./lunchPage")
const api = require("./../api/lunch")

api.getLunchPage().then((page) => {
  console.log(parser.parseLunchPage(page))
})