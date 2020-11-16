const Router = require("./module");

const top= require("../controllers/top-200");

Router.get('/billboard-200', top.top)
Router.get('/billboard-global-200',top.global);

module.exports = Router;