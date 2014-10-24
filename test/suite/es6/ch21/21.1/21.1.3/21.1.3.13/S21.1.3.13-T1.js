/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T1.js
 * @description String.prototype.repeat throws RangeError if n < 0 (6.)
 */

try {
  var result = String.prototype.repeat.call('', -1);
  $ERROR('String.prototype.repeat.call(\'\', -1) should throw exception');
} catch(e) {
  if (!(e instanceof RangeError)) {
    $ERROR('Exception should has type RangeError');
  }
}
