const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(morgan('dev'));

app.listen(3000, function () {
    console.log(`Listening on port ${port}!`);
});

module.exports = app;
