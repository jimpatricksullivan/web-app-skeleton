define([
    'app',
    'jquery'
], function(
    App,
    localJquery // make sure that we're not using global $, i.e. that requirejs is working in karma
) {
    describe('app', function() {
        it('renders html after fetching data', function() {
            var el = localJquery('<div></div>');

            var app = new App(el);
            app.render();
            app.$el.text().should.equal('loading...');
        });
    });

});
