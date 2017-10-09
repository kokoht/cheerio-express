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
//
// const request = require('request')
// const cheerio = require('cheerio')
//
// var url = "http://www.indeed.com/cmp/Fuze-lab/jobs/Entry-Junior-PHP-Jquery-MySQL-Coder-Team_Member-01790db21236725e"
//
// request(url, function(err, resp, body){
//   var $ = cheerio.load(body)
//   var companyName = $('.company')
//   var companyNameText = companyName.text();
//
//   console.log(companyNameText);
// })



app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());


const papua = require('./routes/papua')

app.get('/', function(req,res){
  res.send('express is listening')
})

app.use('/papua', papua)


app.listen(3000)
