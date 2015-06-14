This is a starting point for a node web app. The app does a tiny bit of stuff on both client and server just for the
sake of having example behavior to be tested.

## Libraries Used

The server is powered by [Koa](https://github.com/koajs/koa). It should be fairly easy to replace Koa with the web
framework of your choice. Tests of the server code are run with [Mocha](https://github.com/mochajs/mocha) and
[Chai](https://github.com/chaijs/chai).

On the client, there is a vanilla js app, which you should definitely replace with the framework of your choice. It
uses [requirejs](https://github.com/jrburke/requirejs) for loading modules. Front end testing is done in-browser
via [Karma](https://github.com/karma-runner/karma) with [Mocha](https://github.com/mochajs/mocha),
[requirejs](https://github.com/jrburke/requirejs), [Chai](https://github.com/chaijs/chai), and
[Sinon](https://github.com/cjohansen/Sinon.JS).

## Testing/Running the app

Before running or testing, you should `npm install`. To run all server and client tests, just `npm test`. To run the
app, `npm start`. Visit the app at http://localhost:8080.  Note that these npm steps use
[gulp](https://github.com/gulpjs/gulp) and [bower](https://github.com/bower/bower) under the hood to install front-end
dependencies and run tests.