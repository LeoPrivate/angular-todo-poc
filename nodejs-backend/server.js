const express = require('express');

require('dotenv').config();

const app = express();

let database = {
  "users": [
    {
      "id": 1,
      "userId": 101,
      "name": "Alice"
    },
    {
      "id": 2,
      "userId": 102,
      "name": "Bob"
    },
    {
      "id": 3,
      "userId": 103,
      "name": "Carol"
    }
  ]
}

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

app.post('/todos', (req, res) => {
  return res.send('totos post');
});

app.get('/todos', (req, res) => {
  return res.send(database);
});


app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
