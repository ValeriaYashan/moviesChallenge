const express = require('express');
const router = express.Router();

/*  home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movies Challenge' });
});

module.exports = router;