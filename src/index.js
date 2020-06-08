const express = require('express') 
const app = express()

const amazon = require('./amazon')
const ebay = require('./ebay')

const port = process.env.PORT || 4040

app.get('/', (req, res) => {
    res.send('<p>Add search term to url "/:search"<p/>')
})

app.get('/:search', async (req, res) => { 
    // get parameter from url
    let search = req.params.search
    // making urls dynamic
    let url_amazon = `https://www.amazon.com/s?k=${search}`
    let url_ebay = `https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=${search}&_sacat=0`

    let products_amazon = await amazon(url_amazon)
    let products_ebay = await ebay(url_ebay)
    // send all scraping data to client
    res.send({ 
        'amazon': products_amazon,
        'ebay': products_ebay
    })   
})


app.listen(port, () => {
    console.log(`server runs on http://localhost:${port}`)
})