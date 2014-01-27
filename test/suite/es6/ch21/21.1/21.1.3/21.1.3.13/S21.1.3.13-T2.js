/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T2.js
 * @description String.prototype.repeat throws RangeError if n === Number.POSITIVE_INFINITY (6.)
 */

try {
  var result = String.prototype.repeat.call('', Number.POSITIVE_INFINITY);
  $ERROR('String.prototype.repeat.call(\'\', Number.POSITIVE_INFINITY) should throw exception');
} catch(e) {
  if (!(e instanceof RangeError)) {
    $ERROR('Exception should has type RangeError');
  }
}