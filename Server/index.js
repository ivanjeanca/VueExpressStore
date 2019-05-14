const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const port = 3000

const corsConfig = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(cors(corsConfig));

const API_Products = require('./routes/products');
const API_Categories = require('./routes/categories');

app.use('/api/products', API_Products)
app.use('/api/categories', API_Categories)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})