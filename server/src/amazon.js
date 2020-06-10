const puppeteer = require('puppeteer'); 

let amazon = async(url) => {
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
            // gets all items with span tag
            const items = Array.from(document.querySelectorAll('span[cel_widget_id="MAIN-SEARCH_RESULTS"]'));
            return items.map(item => {
                // textContent does not write null gives error because of that if else is needed 
                // if item has price return 
                if (item.querySelector(".a-price-whole")){
                    return {
                        name: item.querySelector('h2').innerText,
                        price: item.querySelector('.a-link-normal.a-text-normal > span[class="a-price"] > span[class="a-offscreen"]').textContent.replace(/[Count,/]/g, m => (m === '' ? '' : '')),
                        url: item.querySelector('.a-link-normal.a-text-normal').href,
                        img: item.querySelector('.s-image').src
                    }; 
                } else { 
                    // without price
                    return {
                        name: item.querySelector('h2').innerText,
                        price: 'price is not given',
                        url: item.querySelector('.a-link-normal.a-text-normal').href,
                        img: item.querySelector('.s-image').src
                    }
                }
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
 
module.exports = amazon