const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send({express: 'Heelo from express'});
});

app.get('/allroutes', (req, res) => {
  res.set('Content-Type', 'text/xml');
  fs.readFile("routes.xml", "utf8", function(err, data){
    if(err) throw err;
    res.send(data);
  });
});

app.listen(port, () => console.log('Listening on port 3001'));
