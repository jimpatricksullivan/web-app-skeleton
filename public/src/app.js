define(['jquery'], function(localJquery) {

    var App = function(el) {
        this.el = el;
    };

    App.prototype.render = function() {
        var el = this.el;
        localJquery.getJSON( "/echo/hello-world").done(function(data) {
            el.html(data.echoedString);
        })
    };

    return App;

});
