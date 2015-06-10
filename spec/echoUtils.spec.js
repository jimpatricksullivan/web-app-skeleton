var should = require("chai").should();
var echoUtils = require("../src/echoUtils.js");

describe('echoUtils', function(){
    it('should return the expected json response', function *(){
        var response = yield echoUtils.makeEchoResponse('foo');
        response.should.equal('{"echoedString": "foo"}');
    });
});