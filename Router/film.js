const Router = require("./module");
const film = require("../controllers/film");

    Router.get('/latest', film.latest);
    Router.get('/action', film.action);
    Router.get('/comedy', film.comedy);

module.exports = Router;