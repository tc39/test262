/**
 * @description Testing Array.from when passed a String
 * @author Hank Yates (hankyates@gmail.com)
 *
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
 */

runTestCase(function () {
  var arrLikeSource = 'testValue',
      testArr = Array.from(arrLikeSource);

  if (testArr.length != 9) {
    return false;
  }

  return true;

});
