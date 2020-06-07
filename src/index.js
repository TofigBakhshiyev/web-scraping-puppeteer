const express = require('express') 
const app = express()

const amazon = require('./amazon')

const port = process.env.PORT || 4040

app.get('/', async (req, res) => {
    let url = 'https://www.amazon.com/s?k=pc'
    
    let products = await amazon(url)

    // send all scraping data to client
    res.send({ 
        'amazon': products
    })   
})


app.listen(port, () => {
    console.log(`server runs on http://localhost:${port}`)
})