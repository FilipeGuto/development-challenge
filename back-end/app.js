const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');
const errorMidd = require('./src/middleware/errorMidd');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(usersRoutes);
app.use(errorMidd);

module.exports = app;
