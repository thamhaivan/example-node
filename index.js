var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/users.route');

var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/',function(req,res){
  res.render('index',{title:'Hello world',Message:'i am dan'});
});

app.use('/users',userRoute);

app.get('/search',function(req,res){
  var q = req.query.q;
  var matchedUsers = users.filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('users/index',{users:matchedUsers});
});

app.listen(3000,function(){
});