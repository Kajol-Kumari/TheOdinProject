var express = require('express');
var router = express.Router();

const messages =[{text: "Hello there!", user:"Kajol", added: new Date()},
{text:"Hello Node Developers!", user:"Kaju", added: new Date()}];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard',  messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
})

router.post('/new', function(req, res, next){
  let newtext = req.body.msg;
  let newuser= req.body.author;
  messages.push({
    text: newtext,
    user: newuser,
    added: new Date().toLocaleString()
  });
  res.redirect('/');
})
module.exports = router;
