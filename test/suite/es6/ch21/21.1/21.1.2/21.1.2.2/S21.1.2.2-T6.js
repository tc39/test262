/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T6.js
 * @description String.fromCodePoint throws RangeError on > 0x10FFFF (5.e)
 */

try {
  var result = String.fromCodePoint(0x10FFFF + 1);
  $ERROR('String.fromCodePoint(0x10FFFF + 1) should throw exception');
} catch(e) {
  if (!(e instanceof RangeError)) {
    $ERROR('Exception should has type RangeError');
  }
}