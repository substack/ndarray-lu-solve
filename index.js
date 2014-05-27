var ndarray = require('ndarray');
var show = require('ndarray-show');
var ops = require('ndarray-ops');

module.exports = function (L, U, B, Y) {
    console.log('L=\n' + show(L));
    console.log('U=\n' + show(U));
    console.log('B=\n' + show(B));
    console.log();
    
    // Ly = b
    // Ux = y
    
    var m = L.shape[0], n = L.shape[1];
    
    for (var y = 0; y < n; y++) {
        var c = 0;
        for (var x = 0; x < y; x++) {
            c += L.get(x, y) * Y.get(x);
        }
        Y.set(y, (B.get(y) - c) / L.get(y, y));
    }
};
