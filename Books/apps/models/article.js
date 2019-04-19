var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);
mongoose.connection;
mongoose.set('debug', true);
/*
var bookSchema = mongoose.Schema( {
  name: String,
  isbn: {type: String, index: true},
  author: String,
  pages: Number
});
var Book = mongoose.model('Book', bookSchema);
module.exports = mongoose.model('Book', bookSchema);*/

var articleSchema = mongoose.Schema( {
  title: String,
  author: String,
  image: String,
  date: Date,
  story: String,
  likes: Number,
  dislikes: Number,
  articleID: {type: Number, index: true},
  comments: [{}]
});


var Article = mongoose.model('Article', articleSchema);
module.exports = mongoose.model('Article', articleSchema);
