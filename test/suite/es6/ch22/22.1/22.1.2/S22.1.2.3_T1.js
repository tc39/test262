/**
 * @description Testing Array#of when passed Strings
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
