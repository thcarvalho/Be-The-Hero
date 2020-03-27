const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

const {errors} = require('celebrate')

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
