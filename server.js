const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jasonServer.defaults();
app.listen(process.env.PORT || 3000);

server.use(middlewares);
server.use(router);

server.listen(port);