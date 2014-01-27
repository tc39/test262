/**
 * @description Testing Array#of when passed single argument
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
