const express = require('express')
const puppeteer = require('puppeteer');

const app = express()

const port = process.env.PORT || 4040

app.get('/', async (req, res) => {
    (async () => {
        try {
            let url = 'https://www.imdb.com/title/tt2661044/'
            let url1 = 'https://www.amazon.com/s?k=tea'
            const browser = await puppeteer.launch({ 
                ignoreDefaultArgs: ['--disable-extensions'],
                headless: true 
            })
             
            const page = await browser.newPage()
            const page1 = await browser.newPage()
            await page.goto(url)
            await page1.goto(url1)
            //await page.screenshot({path: 'example.png'});
            let data = await page.evaluate(() => {
                let creator = document.querySelector('div[class="credit_summary_item"] > a').innerText
                let rating = document.querySelector('span[itemprop="ratingValue"]').innerText 
                let count = document.querySelector('span[itemprop="ratingCount"]').innerText 
                let summary = document.querySelector('div[class="summary_text"]').innerText

                return {
                    creator,
                    rating,
                    count,
                    summary
                }
            })

            let data1 = await page1.evaluate(() => {
                let item = document.querySelector('div[class="a-section a-spacing-none a-spacing-top-small"]').innerText

                return { 
                    item
                }
            })
            res.send({
                'imdb': data,
                'amazon': data1
            }) 
            await browser.close()
        } catch (error) {
            res.send({'error': error})
        }
    })()
})


app.listen(port, () => {
    console.log(`server runs on http://localhost:${port}`)
})