define([
    'app',
    'jquery',
    '../spec/waitFor.js'
], function(
    App,
    localJquery, // make sure that we're not using global $, i.e. that requirejs is working in karma
    waitFor
) {
    describe('app', function() {
        beforeEach(function () {
            this.sandbox = sinon.sandbox.create();
            this.deferred = localJquery.Deferred();
            this.sandbox.stub(localJquery, 'getJSON').withArgs( "/echo/hello-world").returns(this.deferred);
        });
        afterEach(function () {
            this.sandbox.restore();
        });

        it('renders html after fetching data', function(done) {
            var el = localJquery('<div></div>');
            var app = new App(el);
            app.render();

            // should show loading until data is returned
            app.$el.text().should.equal('loading...');

            // should show returned string after
            this.deferred.resolve({echoedString: 'foobar'});
            waitFor(function() {
                return app.$el.text() === 'foobar';
            }, done);
        });
    });

});
