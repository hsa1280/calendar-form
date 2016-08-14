var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('src'));

app.listen(port, () => {
  console.log('App is listening to port ', port);
})
