const puppeteer = require('puppeteer'); 

let ebay = async(url) => {
    try { 
        const browser = await puppeteer.launch({ 
            // ignore extensions on Windows 10
            ignoreDefaultArgs: ['--disable-extensions'],
            // headless true this means chrome page is not opened but you can do false
            headless: true 
        })
        // create new page 
        const page = await browser.newPage() 

        await page.goto(url)  
        
        // evaluate the page
        const products = await page.evaluate(() => {
            // gets all items with div tag
            const items = Array.from(document.querySelectorAll('div[class="s-item__wrapper clearfix"]'))
            return items.map(item => {
                return {
                    name: item.querySelector('h3').innerText,
                    price: item.querySelector('.s-item__price').innerText,
                    url: item.querySelector('a').href,
                    img: item.querySelector('.s-item__image-img').src 
                };  
            })
        });   
        // close browser
        await browser.close()
        // send all scraping data to client
        return products
    } catch (error) {
        return (null)
    }
} 

module.exports = ebay