var express = require('express');
var router = express.Router();

function Movies() {
  return knex('movies');
};
function Reviews(){
  return knex('reviews');
};


var reviewsformovies = function(){ Movies().where('id', req.params.id).first().then(function(result){
  var x= result;
  Reviews().where('movie_id', req.params.id). then(function(resultE){
    return resultE})
  }




router.get('/', function (req, res, next) {
  res.render('movies/index');
})

router.get('/new', function (req, res, next) {
  res.render('movies/new');
})

router.post('/', function (req, res, next) {
  res.redirect('/');
})

router.get('/:id', function (req, res, next) {
  res.render('movies/show');
})

router.get('/:id/edit', function (req, res, next) {
  res.render('movies/edit');
})

router.post('/:id', function (req, res, next) {

  res.redirect('/');
})

router.post('/:id/delete', function (req, res, next) {

  res.redirect('/');
})


module.exports = router;
