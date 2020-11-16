const rp = require("request-promise");
const $ = require("cheerio");


const indonesia = (req,res) => {
    const link = `https://id.wikipedia.org/wiki/Daftar_presiden_Indonesia`;
    const data = [];
    rp(link)
    .then(html => {
        for (let i = 2; i < $('b > a',html).length - 9; i++) {
            data.push({
                name: $('b > a',html)[i].attribs.title,
                link : `https://id.wikipedia.org${$('b > a',html)[i].attribs.href}`
            })            
        }
        res.json(data);
    })
    .catch(e => {throw e});
}

module.exports = {
    indonesia: indonesia
}