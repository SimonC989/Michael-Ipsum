const express = require('express');
const path = require('path');
const db = require('../SQLdatabase/index');

const app = express();
const port = process.env.PORT || 3333;
const { tableName } = require('../SQLdatabase/model');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Port ${port} ~ Michael Ipsum`);
});

