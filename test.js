

const cheerio = require("cheerio")
$ = cheerio.load(content)
console.log($("tbody").get().length);