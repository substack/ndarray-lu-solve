var ndarray = require('ndarray');
var show = require('ndarray-show');
var crout = require('ndarray-crout-decomposition');
var ops = require('ndarray-ops');

module.exports = function (A, B, scratch) {
    var m = A.shape[0] - 1, n = A.shape[1];
    if (!scratch) scratch = new Float64Array(m * n * 2);
    else if (scratch.size < m * n * 2) {
        throw new Error('insufficient scratch space');
    }
    
    var sc = ndarray(scratch, [ m, n * 2 ]);
    var L = sc.hi(m, n);
    var U = sc.lo(0, n);
    var ok = crout(A.hi(m, n), L, U);
    if (!ok) return undefined;
console.log('L=\n' + show(L));
console.log('U=\n' + show(U));
    
    return B;
};
