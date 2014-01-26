/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T5.js
 * @description String.prototype.repeat can be used on null objects
 */

runTestCase(function() {
  try {
    var result = String.prototype.repeat.call(null, 1);
  } catch(e) {
    return e instanceof TypeError;
  }
  
  return false;
});
