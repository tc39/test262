/**
 * @description Testing Array#of when passed single argument
 * @author Hank Yates (hankyates@gmail.com)
 *
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of
 */

runTestCase(function () {
  var testArr = Array.of(3);

  if (testArr.length !== 1) {
    return false;
  }

  if (testArr[0] !== 3) {
    return false;
  }

  return true;

});
