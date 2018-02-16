var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {

    axios({
      method:'post',
      url:'https://www.webmerge.me/merge/154847/m41uwt',
      headers: { 'Content-Type': 'application/json' },
      data: {
          name: "Johnson and Johnson",
          streetAddress1: "125 W Stedhill Loop",
          streetAddress2: "",
          city: "The Woodlands",
          state: "Texas",
          zip: "77385",
          limit: "5000",
          included: "200",
          x: "X"
      }
    })
    .then(function(response) {
          console.log(response);
    });
    res.render('index', { title: 'Email Sent!' });
});

module.exports = router;
