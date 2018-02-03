const xpath = require('xpath')
const parse5 = require('parse5')
const xmlser = require('xmlserializer')
const Dom = require('xmldom').DOMParser

const parseLunchPage = lunchPage => {
  const document = parse5.parse(lunchPage.toString())
  const xhtml = xmlser.serializeToString(document)
  const doc = new Dom({ errorHandler: { error: () => {} } }).parseFromString(xhtml)
  const select = xpath.useNamespaces({ x: 'http://www.w3.org/1999/xhtml' })
  const foodItems = select('(//x:div[@class="product"])/x:div[@class="description"]', doc)
  return foodItems.map(item => {
    const domItem = new Dom({errorHandler: {error: () => {}}}).parseFromString(xmlser.serializeToString(item))
    return {
      header: select('//x:h3/text()', domItem).toString().trim(),
      description: select('//x:p/text()', domItem).toString().trim()
    }
  })
}

module.exports = {
  parseLunchPage: parseLunchPage
}
