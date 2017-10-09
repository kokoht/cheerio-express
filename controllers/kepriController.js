var kepris = require('../models/kepri')

const request = require('request')
const cheerio = require('cheerio')
var url = 'https://id.jobsdb.com/ID/EN/Search/FindJobs?KeyOpt=COMPLEX&JSRV=1&RLRSF=1&JobCat=1&Locations=362&JSSRC=JSRSB'

function fetchData(req, res, next){
  request(url, function(err, resp, body){
    var $ = cheerio.load(body)
    res.locals = []
    $('.result-sherlock-cell').each(function(i, obj){
      var title = $(obj).find('.posLink').text();
      var company = $(obj).find('.job-company').text();
      var location = $(obj).find('.job-location').text();
      var pubDate = $('meta[itemProp=datePosted]').attr('content')
      var items = {
        title: title,
        company: company,
        location: location,
        pubDate: pubDate
      }
      res.locals.push(items)
    })
    console.log('di fetchData msk?', res.locals);
    next()
  })
}

function findAllKepri (req, res) {
  kepris.find({}, function(err, result){
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

function createKepri (req, res) {
  console.log('di controller create kepri', res.locals);
  res.locals.map( localKepri => {
    kepris.create({
      title: localKepri.title,
      company: localKepri.company,
      location: localKepri.location,
      pubDate: localKepri.pubDate,
      category: '',
      expert: '',
  		link: '',
  		description: ''
    })
    .then(result => {
      res.send('suksesss')
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })
}

module.exports = {
  findAllKepri,
  createKepri,
  fetchData
}
