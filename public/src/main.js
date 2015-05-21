requirejs.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min.js',
        'underscore': '../bower_components/underscore/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['app', 'jquery'], function (App, $) {
    var app = new App($('body'));
    app.render();
});
