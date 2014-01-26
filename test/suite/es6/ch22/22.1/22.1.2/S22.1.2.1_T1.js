/**
 * @description Testing Array.from when passed a String
 */

runTestCase(function () {
  var arrLikeSource = 'testValue',
      testArr = Array.from(arrLikeSource);

  if (testArr.length != 9) {
    return false;
  }

  return true;

});
