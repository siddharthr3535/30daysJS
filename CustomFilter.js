/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  var result = [];
  var t = 0;
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result[t++] = arr[i];
    }
  }
  return result;
};
