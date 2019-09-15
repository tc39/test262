// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If S contains any character that is not a radix-R digit,
    then let Z be the substring of S consisting of all characters before
    the first such character; otherwise, let Z be S
esid: sec-parseint-string-radix
description: Complex test. Radix-R notation in [0..9]
---*/

//CHECK#2
if (parseInt("0123456789", 2) !== 1) {
  throw new Test262Error('#2: parseInt("0123456789", 2) === 1. Actual: ' + (parseInt("0123456789", 2)));
}

//CHECK#3
if (parseInt("01234567890", 3) !== 5) {
  throw new Test262Error('#3: parseInt("01234567890", 3) === 5. Actual: ' + (parseInt("01234567890", 3)));
}

//CHECK#4
if (parseInt("01234567890", 4) !== 27) {
  throw new Test262Error('#4: parseInt("01234567890", 4) === 27. Actual: ' + (parseInt("01234567890", 4)));
}

//CHECK#5
if (parseInt("01234567890", 5) !== 194) {
  throw new Test262Error('#5: parseInt("01234567890", 5) === 194. Actual: ' + (parseInt("01234567890", 5)));
}

//CHECK#6
if (parseInt("01234567890", 6) !== 1865) {
  throw new Test262Error('#6: parseInt("01234567890", 6) === 1865. Actual: ' + (parseInt("01234567890", 6)));
}

//CHECK#7
if (parseInt("01234567890", 7) !== 22875) {
  throw new Test262Error('#7: parseInt("01234567890", 7) === 22875. Actual: ' + (parseInt("01234567890", 7)));
}

//CHECK#8
if (parseInt("01234567890", 8) !== 342391) {
  throw new Test262Error('#8: parseInt("01234567890", 8) === 342391. Actual: ' + (parseInt("01234567890", 8)));
}

//CHECK#9
if (parseInt("01234567890", 9) !== 6053444) {
  throw new Test262Error('#9: parseInt("01234567890", 9) === 6053444. Actual: ' + (parseInt("01234567890", 9)));
}

//CHECK#10
if (parseInt("01234567890", 10) !== Number(1234567890)) {
  throw new Test262Error('#10: parseInt("01234567890", 10) === Number(1234567890). Actual: ' + (parseInt("01234567890", 10)));
}
