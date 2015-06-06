var path = require("path");
var koa = require('koa');
var logger = require('koa-logger');
var route = require('koa-route');
var serveStatic = require('koa-static');
var echoUtils = require('./echoUtils.js');

var app = koa();
app.use(logger());

app.use(serveStatic(path.join(__dirname, '..', 'public')));

app.use(route.get('/echo/:stringToEcho', function *(stringToEcho) {
    this.body = yield echoUtils.makeEchoResponse(stringToEcho);
    this.set('Content-Type', 'application/json');
}));

var port = process.env.PORT || 8000;

app.listen(port);
console.log('listening on port ' + port);