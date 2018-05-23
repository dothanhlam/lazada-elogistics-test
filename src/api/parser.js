const request = require('request')
const cheerio = require('cheerio')

parseProduct = url => {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, html) {
      const $ = cheerio.load(html)
      let product = {
        name: $('.pdp-product-title').html(),
        seller: $($('.seller-name__detail').html()).text(),
        score: $($('.score').html()).text(),
        specs: [],
        price: $('.pdp-price').html(),
      }

      $('.pdp-product-highlights').children().children().each((i, item) => {
        product.specs.push($(item).text())
      })

      resolve(product)
    })
  })
}

module.exports = {
  parseProduct: parseProduct
}