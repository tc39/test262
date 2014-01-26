/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T3.js
 * @description String.prototype.startsWith cannot be used with null as this.
 */

runTestCase(function() {
  try {
    var result = String.prototype.startsWith.call(null, 'test');
  } catch(e) {
    return e instanceof TypeError;
  }
  return false;
});