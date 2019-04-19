var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http( {
    method: 'GET',
    url: '/article'
  }).then(function successCallback(response) {
    $scope.books = response.data;
  }, function errorCallback(response) {
    console.log('Error: ' + response);
  });
  
  /*
  $scope.del_book = function(book) {
    $http( {
      method: 'DELETE',
      url: '/book/:isbn',
      params: {'isbn': book.isbn}
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log('Error: ' + response);
    });
  };


        title:     req.body.title,
        author:    req.body.userName,
        image:     reg.body.imageUrl,
        date:      new Date().
        story:     reg.body.story,
        likes:     0,
        dislikes:  0,
        articleID: Math.floor(Math.random() * 452136254),  // This will query later and assign an id...
        comments:  [];

  */

  $scope.add_article = function() {
    var body = '{ "title": "' + $scope.Title + 
    '", "userName": "' + $scope.userName +
    '", "imageUrl": "' + $scope.imageUrl   + 
    '", "story": "' + $scope.Story + '" }';
    $http({
      method: 'POST',
      url: '/article',
      data: body
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log('Error: ' + response);
    });
  };
});
