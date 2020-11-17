const Router = require("./module");
const film = require("../controllers/film");

    Router.get('/latest', film.latest);

module.exports = Router;