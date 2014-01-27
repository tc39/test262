/**
 * @description Testing Array.from when passed an Object
 * @author Hank Yates (hankyates@gmail.com)
 *
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
 */

runTestCase(function () {
  var testArr = Array.from({
    'a': 1,
    'b': '2',
    'c': 'three',
    'length': '3'
  });

  if (testArr.length != 3) {
    return false;
  }

  return true;

});
