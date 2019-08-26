const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routers
app.use('/users', require('./routes/users'));

const port = process.env.PORT || 3006;
app.listen(port);
console.log(`Server berjalan di server ${port}`);