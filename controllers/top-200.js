const rp = require("request-promise");
const $ = require("cheerio");

const top = (req,res) => {
    const link = `https://www.billboard.com/charts/billboard-200`;
    rp(link)
    .then(html => {
        let data = [];
        let lenght1 = $('span.chart-element__information__song',html)
        let length2 = $('span.chart-element__information__artist',html)
        for (let i = 0; i < lenght1.length; i++) {
            data.push({song: lenght1[i].children[0].data} )            
        }
        for (let i = 0; i < length2.length; i++) {
            data[i] = {...data[i], singer:length2[i].children[0].data};
        }
        res.json(data);
    })
    .catch(e => {throw e})
}

const global = (req,res) => {
    const link = `https://www.billboard.com/charts/billboard-global-200`;
    rp(link)
    .then(html => {
        let data = [];
        let lenght1 = $('span.chart-element__information__song',html)
        let length2 = $('span.chart-element__information__artist',html)
        for (let i = 0; i < lenght1.length; i++) {
            data.push({song: lenght1[i].children[0].data} )            
        }
        for (let i = 0; i < length2.length; i++) {
            data[i] = {...data[i], singer:length2[i].children[0].data};
        }
        res.json(data);
    })
    .catch(e => {throw e})
}

module.exports = {
    top: top,
    global: global
}