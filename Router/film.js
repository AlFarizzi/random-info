const Router = require("./module");
const film = require("../controllers/film");

    Router.get('/latest', film.latest);
    Router.get('/action', film.action);

module.exports = Router;