const Router = require("./module");

const presiden = require("../controllers/presiden");

Router.get('/indonesia', presiden.indonesia);

module.exports = Router;