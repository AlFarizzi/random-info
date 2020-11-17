const rp = require("request-promise");
const $ = require("cheerio");

const latest = (req,res) => {
    const link = `http://85.114.138.56/movies/`;
    let data = [];
    rp(link)
    .then(html => {
        let length = $('.mli-info > h2',html);
        let durasi = $('.rating-durasi > span.mli-durasi > i',html);
        let rating = $('.rating-durasi > span.mli-rating > i',html);
        for (let i = 0; i < length.length; i++) {
            data.push({title: length[i].children[0].data});
        }
        for (let i = 0; i < length.length; i++) {
            data[i] = {...data[i], rating: rating[i].next?.data || "-", durasi: durasi[i].next?.data || "-"}
        }
        console.log(data);
        res.end();
    })
    .catch(e => {throw e})
}

module.exports = {
    latest: latest
}