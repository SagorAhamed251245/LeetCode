/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
      const res = helperFunction(s);
  let i = 0;
  let j = res.length - 1;
  while (i < j) {
    if (res[i] !== res[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

function helperFunction(s) {
  var regExp = /[^a-z0-9A-Z]/gi;
  return s.toLowerCase().replace(regExp, "");
}
