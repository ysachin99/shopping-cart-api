const express = require('express')
const cors = require('cors')
const products = require('./products')

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to shop API ...');
})

app.get('/products', (req, res) => {
    res.send(products);
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})

