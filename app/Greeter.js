const data = require("./data.json");
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = data.title;
    return greet;
};