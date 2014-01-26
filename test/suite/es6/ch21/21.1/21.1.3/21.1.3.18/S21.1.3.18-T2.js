/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T2.js
 * @description String.prototype.startsWith cannot accept Regular Exceptions.
 */

runTestCase(function() {
  var regex = /\w+/;
  try {
    var result = String.prototype.startsWith.call('word', regex);
  } catch(e) {
    return e instanceof TypeError;
  }
  return false;
});