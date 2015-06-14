requirejs.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min'
    }
});

require(['app', 'jquery'], function (App, $) {
    var app = new App($('body'));
    app.render();
});