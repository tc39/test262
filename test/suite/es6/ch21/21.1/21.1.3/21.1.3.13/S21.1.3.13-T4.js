/**
 * @path es6/ch21/21.1/21.1.3/21.1.3.13/S21.1.3.13-T4.js
 * @description String.prototype.repeat can be used on undefined objects
 */

try {
  var result = String.prototype.repeat.call(undefined, 1);
  $ERROR('String.prototype.repeat.call(undefined, 1) should throw exception');
} catch(e) {
  if (!(e instanceof TypeError)) {
    $ERROR('Exception should has type TypeError');
  }
}
