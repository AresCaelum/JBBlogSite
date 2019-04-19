var Article = require('./models/article');
module.exports = function(app) {
  app.get('/article', function(req, res) {
    Article.find({}, function(err, result) {
      if ( err ) throw err;
      res.json(result);
    });
  }); 

  app.post('/article', function(req, res) {
    var article = new Article( {
        title:     req.body.title,
        author:    req.body.userName,
        image:     reg.body.imageUrl,
        date:      new Date().
        story:     reg.body.story,
        likes:     0,
        dislikes:  0,
        articleID: Math.floor(Math.random() * 452136254),  // This will query later and assign an id...
        comments:  [];
    });

    article.save(function(err, result) {
      if ( err ) throw err;
      res.json( {
        message:"Successfully added an article",
        article:result
      });
    });
  });

  app.delete("/article/:articleID", function(req, res) {
    Article.findOneAndRemove(req.query, function(err, result) {
      if ( err ) throw err;
      res.json( {
        message: "Article was removed",
        article: result
      });
    });
  });

  var path = require('path');
  app.get('*', function(req, res) {
    res.sendfile(path.join(__dirname + '/public', 'index.html'));
  });

};
