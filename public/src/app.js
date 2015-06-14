define([
    'jquery'
], function(
    localJquery // make sure that we're not using global $, i.e. that requirejs is working in karma
) {

    var App = function(el) {
        this.$el = el;
    };

    App.prototype.render = function() {
        var $el = this.$el;
        $el.html("loading...");
        localJquery.getJSON( "/echo/hello-world").done(function(data) {
            $el.html(data.echoedString);
        })
    };

    return App;

});
