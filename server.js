const express = require('express');
const router = require('./cart-items')

const app = express();

app.use('/',router)

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));

