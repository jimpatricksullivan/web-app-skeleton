define(['app', 'jquery'], function(App, $) {

    describe('app', function() {
        it('renders html after fetching data', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            expect(1).toEqual(1);
        });
    });

});
