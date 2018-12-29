module.exports = function tiny(str) {
    if (typeof str !== typeof "") throw new TypeError("input must be string");
    return String.replace(/\s/g, "");
}