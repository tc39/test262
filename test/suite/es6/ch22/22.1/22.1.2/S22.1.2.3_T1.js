/**
 * @description Testing Array#of when passed Strings
 * @author Hank Yates (hankyates@gmail.com)
 *
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of
 */

runTestCase(function () {
  var testArr = Array.of('testString', 'anotherTestString');

  if (testArr[0] !== 'testString') {
    return false;
  }

  if (testArr[1] !== 'anotherTestString') {
    return false;
  }

  return true;

});
