// Array, number -> string

// TODO: split into 3s and format those individually. gonna be sweet :+1:
const getSlackMessage = (lunchList, days) =>
  lunchList
    .slice(0, days * 3)
    .reduce(
      (message, lunchItem) =>
        `${message}${lunchItem.header}\n${lunchItem.description}\n`,
      ''
    )

module.exports = {
  getSlackMessage: getSlackMessage
}
