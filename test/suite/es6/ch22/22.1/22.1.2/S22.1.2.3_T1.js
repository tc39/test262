/**
 * @description Testing Array.of when passed Strings
 */

runTestCase(function () {
  var testArr = Array.of('testString', 'anotherTestString');

  if (testArr.length != 2) {
    return false;
  }

  return true;

});
