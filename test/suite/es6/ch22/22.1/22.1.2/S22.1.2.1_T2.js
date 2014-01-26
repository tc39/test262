/**
 * @description Testing Array.from when passed an Object
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
