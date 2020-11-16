const rp = require("request-promise");
const $ = require("cheerio");

const top = (req,res) => {
    const link = `https://www.billboard.com/charts/billboard-200`;
    rp(link)
    .then(html => {
        let data = [];
        let len = $('span.chart-element__information__song',html).length;
        for (let i = 0; i < 200; i++) {
            let song = $('span.chart-element__information__song',html)[i].children[0].data;
            let singer = $('span.chart-element__information__artist',html)[i].children[0].data;
            data.push({
                song: song,
                singer: singer
            })
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
        let len = $('span.chart-element__information__song',html).length;
        for (let i = 0; i < 200; i++) {
            let song = $('span.chart-element__information__song',html)[i].children[0].data;
            let singer = $('span.chart-element__information__artist',html)[i].children[0].data;
            data.push({
                song: song,
                singer: singer
            })
        }
        res.json(data);
    })
    .catch(e => {throw e})
}

module.exports = {
    top: top,
    global: global
}