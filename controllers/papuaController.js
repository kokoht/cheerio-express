var papuas = require('../models/papua')

const request = require('request')
const cheerio = require('cheerio')
var url = "http://www.indeed.com/cmp/Fuze-lab/jobs/Entry-Junior-PHP-Jquery-MySQL-Coder-Team_Member-01790db21236725e"

function fetchData(req, res, next){
  request(url, function(err, resp, body){
    var $ = cheerio.load(body)
    var companyName = $('.company')
    var companyNameText = companyName.text();
    console.log(companyNameText);
    res.locals = {
      companyNameText: companyNameText
    }
    next()
  })

}

function findAllPapua (req, res) {
  papuas.find({}, function(err, result){
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

function createPapua (req, res) {
  console.log('di controller', res.locals.companyNameText);
  papuas.create({
    title: res.locals.companyNameText
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  findAllPapua,
  createPapua,
  fetchData
}
