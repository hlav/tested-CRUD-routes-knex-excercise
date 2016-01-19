var express = require('express');
var router = express.Router();

function Movies() {
  return knex('movies');
};
function Reviews(){
  return knex('reviews');
};




router.get('/:id/reviews', function (req, res, next) {
  res.render('movies/reviews/show');
})

router.get('/:id/reviews/:revid', function (req, res, next) {
  res.render('movies/reviews/edit');
})

router.get('/:id/reviews/:revid/edit', function (req, res, next) {
  res.render('movies/reviews/edit');
})

router.get('/:id/reviews/new', function (req, res, next) {
  res.render('movies/reviews/new');
})
router.post('/:id/reviews', function (req, res, next) {
  res.redirect('/movies/:id/reviews');
})


router.post('/:id/reviews/:revid', function (req, res, next) {
  res.redirect('/movies/:id/reviews');
})

router.post('/:id/reviews/:revid/delete', function (req, res, next) {
  res.redirect('/movies/:id/reviews');
})
module.exports = router;
