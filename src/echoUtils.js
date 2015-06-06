module.exports = {
    makeEchoResponse: function* (stringToEcho) {
        return JSON.stringify({echoedString: stringToEcho});
    }
};