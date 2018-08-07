const express = require('express');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const cors = require('cors');

const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
