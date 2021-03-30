require('dotenv').config();
const express = require('express');
const app = express();

if (!process.env.HTTP_PORT) {
  throw new Error('No http port specified!');
}

const http_port = Number(process.env.HTTP_PORT);


app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(http_port, () => {
  console.log(`Express server listening for http requests on port ${http_port}`);
});

