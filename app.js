const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(`mongodb://jofipass:jofipass1@joficluster-shard-00-00-vghcd.mongodb.net:27017,joficluster-shard-00-01-vghcd.mongodb.net:27017,joficluster-shard-00-02-vghcd.mongodb.net:27017/jofi?ssl=true&replicaSet=joficluster-shard-0&authSource=admin`, function(err){
  if(err) {console.log(err);}
  else {
  console.log('db connected');}
})


const cors = require('cors')


app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());

const papua = require('./routes/papua')
const babel = require('./routes/babel')
const kepri = require('./routes/kepri')

app.get('/', function(req,res){
  res.send('express is listening')
})

app.use('/papua', papua)
app.use('/babel', babel)
app.use('/kepri', kepri)


app.listen(3000)
