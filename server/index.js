require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

if (!process.env.HTTP_PORT) {
  throw new Error('No http port specified!');
}

const http_port = Number(process.env.HTTP_PORT);

app.use(express.static('client/dist'));

const htmlFile = path.join(__dirname, '../client', 'dist', 'index.html');
app.get('/*', (req, res) => {
  res.sendFile(htmlFile);
});

app.listen(http_port, () => {
  console.log(`Express server listening for http requests on port ${http_port}`);
});

