var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var papuaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  pubDate: {
    type: String
  },
  category: {
    type: String
  },
  location: {
    type: String
  },
  expert: {
    type: String
  },
  link: {
    type: String
  },
  description: {
    type: String
  }
})

let papua = mongoose.model('papua', papuaSchema)

module.exports = papua
