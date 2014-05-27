var ndarray = require('ndarray');
var show = require('ndarray-show');
var ops = require('ndarray-ops');

module.exports = function (L, U, B, X, Y) {
    var m = L.shape[0], n = L.shape[1];
    
    // LY = B, solve for Y
    for (var y = 0; y < n; y++) {
        var c = 0;
        for (var x = 0; x < y; x++) {
            c += L.get(x, y) * Y.get(x);
        }
        Y.set(y, (B.get(y) - c) / L.get(y, y));
    }
    
    //UX = Y, solve for X
    for (var y = n - 1; y >= 0; y--) {
        var c = 0;
        for (var x = n - 1; x >= y; x--) {
            c += U.get(x, y) * X.get(x);
        }
        X.set(y, (Y.get(y) - c) / U.get(y, y));
    }
    
    return X;
};