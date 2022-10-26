## Web Scraping with Puppeteer 
This App scraps data from Amazon and Ebay
#### Run app
In the frontend and sever directory, run these commands
```
npm install
```
```
npm run dev
```
or
```
npm start
```
#### App Runing
Open [http://localhost:3000](http://localhost:3000/main) <br /> 
Open [http://localhost:4040](http://localhost:4040) <br />

#### API
HTTP (GET) method example
```
http://localhost:4040/:"search_term"
```

#### Data format is JSON
Example output
```
{
    name: "Tea",
    price: "12.7$",
    url: "/url",
    img: "/src"
}
```

#### Note
After installing, if the app gives this error: `Error: Failed to launch the browser process!` <br/>
Extract chrome-win.zip (`chrome-win.zip file locates in the /node_modules/puppeteer/.local-chromium/`) file to `/node_modules/puppeteer/.local-chromium/win64-776035`. If there is not any chrome-win.zip file, download chormium from this link [Chromium](https://download-chromium.appspot.com/)
