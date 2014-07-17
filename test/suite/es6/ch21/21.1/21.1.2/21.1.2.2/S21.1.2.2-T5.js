/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T5.js
 * @description String.fromCodePoint throws RangeError on nextCP < 0 (5.e)
 */

try {
  var result = String.fromCodePoint(-1);
  $ERROR('String.fromCodePoint(-1) should throw exception');
} catch(e) {
  if (!(e instanceof RangeError)) {
    $ERROR('Exception should has type RangeError');
  }
}
