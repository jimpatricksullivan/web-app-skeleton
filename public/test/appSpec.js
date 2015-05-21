define(['app', 'jquery', 'underscore'], function(App, $, nonGlobalUnderscore) {

    describe('just checking', function() {

        it('works for app', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            expect(el.text()).toEqual('require.js up and running');
        });

        it('works for underscore', function() {
            // verify that _ works and is definitely required, i.e. not relying on a global
            expect(nonGlobalUnderscore.size([1,2,3])).toEqual(3);
        });

    });

});
