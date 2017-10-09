const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/cheeriojofi', function(err){
  if(err) {console.log(err);}
  else {
  console.log('db connected');}
})
const cors = require('cors')

// const request = require('request')
// const cheerio = require('cheerio')
// var url = "http://www.indeed.com/cmp/Fuze-lab/jobs/Entry-Junior-PHP-Jquery-MySQL-Coder-Team_Member-01790db21236725e"
// request(url, function(err, resp, body){
//   var $ = cheerio.load(body)
//   var companyName = $('.company')
//   var companyNameText = companyName.text();
//   console.log(companyNameText);
// })

const request = require('request')
const cheerio = require('cheerio')
// var url = "http://www.indeed.com/cmp/Fuze-lab/jobs/Entry-Junior-PHP-Jquery-MySQL-Coder-Team_Member-01790db21236725e"
var url = 'https://id.jobsdb.com/ID/EN/Search/FindJobs?KeyOpt=COMPLEX&JSRV=1&RLRSF=1&JobCat=1&Locations=226&JSSRC=JSRSB'
request(url, function(err, resp, body){
  var $ = cheerio.load(body)

  // ini masih berupa list.. blm satu2..
  // var jobTitlePapua = $('.posLink')
  // var jobTitlePapuaText = jobTitlePapua.text();
  // console.log(jobTitlePapuaText);
// trus jd in object utk siap dikirim
  // var jobPapua = {
  //   title: jobTitlePapuaText
  // }

$('.result-sherlock-cell').each(function(i, obj){
  var title = $(obj).find('.posLink').text();
  var company = $(obj).find('.job-company').text();
  var location = $(obj).find('.job-location').text();
  // var pubDate2 = $(obj).find('.job-quickinfo-timestamp').text()
  // var author = $('meta[name=author]').attr("content")
  var pubDate = $('meta[itemProp=datePosted]').attr('content')

  console.log(title);
  console.log(company);
  console.log(location);
  console.log(pubDate);
  // console.log(pubDate2);
})



})




app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());

// matiin dulu
// const papua = require('./routes/papua')

app.get('/', function(req,res){
  res.send('express is listening')
})

// app.use('/papua', papua)


app.listen(3000)
