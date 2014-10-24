/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T3.js
 * @description String.prototype.startsWith cannot be used with null as this.
 */

try {
  var result = String.prototype.startsWith.call(null, 'test');
  $ERROR('String.prototype.startsWith.call(null, \'test\') should throw exception');
} catch(e) {
  if (!(e instanceof TypeError)) {
    $ERROR('Exception should has TypeError type.');
  }
}