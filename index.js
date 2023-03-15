let jsonserver = require("json-server");

let server = jsonserver.create();
let router = jsonserver.router("db.json");

let middlewares = jsonserver.defaults();
let port = process.env.port || 3001;

server.use(middlewares);

server.use(router);

server.listen(port);
