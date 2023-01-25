/* Man Young Oh / 301161472 / COMP229-005 */

/* load the framework and all routes defining  */
let express = require('express');
let router = express.Router();

/* route to call and load 'Home' page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* route to call and load 'Home' page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* route to call and load 'about' page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about' });
});
/* route to call and load 'education' page. */
router.get('/education', function(req, res, next) {
  res.render('index', { title: 'Education', page: 'education' });
});
/* route to call and load 'career' page. */
router.get('/career', function(req, res, next) {
  res.render('index', { title: 'Career', page: 'career' });
});
/* route to call and load 'contact' page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page: 'contact' });
});
module.exports = router;
