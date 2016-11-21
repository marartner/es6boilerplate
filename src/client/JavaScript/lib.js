module.exports = {
    replacer: function(elementId, text) {
        document.getElementById(elementId).innerHTML = text;
    }
};