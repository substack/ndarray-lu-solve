var solve = require('../');
var show = require('ndarray-show');
var ndarray = require('ndarray');
var zeros = require('zeros');

var A = ndarray([
    2, 1, -1, 8,
    -3, -1, 2, -11,
    -2, 1, 2, -3
], [ 4, 3 ]);
var B = zeros([ 4, 3 ]);
solve(A, B);
//console.log(show(solve(A, B)));
