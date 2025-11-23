/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  var fns = functions;
  return function (x) {
    for (var i = fns.length - 1; i >= 0; i--) {
      x = fns[i](x);
    }
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
