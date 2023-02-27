const express = require('express');
const route = require('./controller');
const cors = require('cors');
const port = parseInt(process.env.PORT) || 3000;
const app = express();
const {errorHandling} = require('./middleware/ErrorHandling');