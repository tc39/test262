/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.18/S21.1.3.18-T2.js
 * @description String.prototype.startsWith cannot accept Regular Exceptions.
 */

var regex = /\w+/;
try {
  var result = String.prototype.startsWith.call('word', regex);
  $ERROR('String.prototype.startsWith.call(\'word\', regex) should throw exception');
} catch(e) {
  if (!(e instanceof TypeError)) {
    $ERROR('Exception should has TypeError type.');
  }
}