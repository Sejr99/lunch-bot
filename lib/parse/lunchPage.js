const xpath = require('xpath')
const parse5 = require('parse5')
const xmlser = require('xmlserializer')
const dom = require('xmldom').DOMParser

const parseLunchPage = lunchPage => {
  const document = parse5.parse(lunchPage.toString())
  const xhtml = xmlser.serializeToString(document)
  const doc = new dom({ errorHandler: { error: () => {} } }).parseFromString(
    xhtml
  )
  const select = xpath.useNamespaces({ x: 'http://www.w3.org/1999/xhtml' })
  const headers = select(
    '(//x:div[@class="product"])/x:div[@class="description"]/x:h3/text()',
    doc
  )
  const descriptions = select(
    '(//x:div[@class="product"])/x:div[@class="description"]/x:p/text()',
    doc
  )

  return headers.map((header, i) => ({
    header: header.toString().trim(),
    description: descriptions[i] ? descriptions[i].toString().trim() : ''
  }))
}

module.exports = {
  parseLunchPage: parseLunchPage
}
