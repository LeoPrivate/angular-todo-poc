const express = require('express');
const cors = require('cors');

require('dotenv').config();

const bodyParser = require('body-parser'); 

const app = express();
app.use(cors());

const request = require('request');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => { 
  return res.send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});


app.post('/todos', (req, res2) => {
  request.post({
	  url:     `http://${process.env.URL}:${process.env.PORTDB}/todos`,
    form:    { name: req.body.name }
  }, (error, response, body) => {
    
  });
  res2.send(req.body);
});

app.delete('/todos/:id', (req, res) => {
  console.log(req.params.id);
  request.delete(`http://${process.env.URL}:${process.env.PORTDB}/todos/${req.params.id}`,(err, res, body) => {
  });
  res.send('deleted');
})

app.get('/todos', (req, res2) => {
  console.log("get");
  request(`http://${process.env.URL}:${process.env.PORTDB}/todos`, res2, (err, res, body) => {
    if (err) { return console.log(err); }
    return res2.send(res.body);
  });
});

app.use(cors());
app.listen(process.env.PORT, "0.0.0.0", () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
