// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Compute the mathematical integer value
    that is represented by Z in radix-R notation, using the
    letters A-Z and a-z for digits with values 10 through 35.
    Compute the number value for Result(16)
esid: sec-parseint-string-radix
description: Checking algorithm for R = 2
---*/

//CHECK#1
if (parseInt("1", 2) !== 1) {
  throw new Test262Error('#1: parseInt("1", 2) === 1. Actual: ' + (parseInt("1", 2)));
}

//CHECK#2
if (parseInt("11", 2) !== 3) {
  throw new Test262Error('#2: parseInt("11", 2) === 3. Actual: ' + (parseInt("11", 2)));
}

//CHECK#3
if (parseInt("111", 2) !== 7) {
  throw new Test262Error('#3: parseInt("111", 2) === 7. Actual: ' + (parseInt("111", 2)));
}

//CHECK#4
if (parseInt("1111", 2) !== 15) {
  throw new Test262Error('#4: parseInt("1111", 2) === 15. Actual: ' + (parseInt("1111", 2)));
}

//CHECK#5
if (parseInt("11111", 2) !== 31) {
  throw new Test262Error('#5: parseInt("11111", 2) === 31. Actual: ' + (parseInt("11111", 2)));
}

//CHECK#6
if (parseInt("111111", 2) !== 63) {
  throw new Test262Error('#6: parseInt("111111", 2) === 63. Actual: ' + (parseInt("111111", 2)));
}

//CHECK#7
if (parseInt("1111111", 2) !== 127) {
  throw new Test262Error('#7: parseInt("1111111", 2) === 127. Actual: ' + (parseInt("1111111", 2)));
}

//CHECK#8
if (parseInt("11111111", 2) !== 255) {
  throw new Test262Error('#8: parseInt("11111111", 2) === 255. Actual: ' + (parseInt("11111111", 2)));
}

//CHECK#9
if (parseInt("111111111", 2) !== 511) {
  throw new Test262Error('#9: parseInt("111111111", 2) === 511. Actual: ' + (parseInt("111111111", 2)));
}

//CHECK#10
if (parseInt("1111111111", 2) !== 1023) {
  throw new Test262Error('#10: parseInt("1111111111", 2) === 1023. Actual: ' + (parseInt("1111111111", 2)));
}

//CHECK#11
if (parseInt("11111111111", 2) !== 2047) {
  throw new Test262Error('#11: parseInt("11111111111", 2) === 2047. Actual: ' + (parseInt("11111111111", 2)));
}

//CHECK#12
if (parseInt("111111111111", 2) !== 4095) {
  throw new Test262Error('#12: parseInt("111111111111", 2) === 4095. Actual: ' + (parseInt("111111111111", 2)));
}

//CHECK#13
if (parseInt("1111111111111", 2) !== 8191) {
  throw new Test262Error('#13: parseInt("1111111111111", 2) === 8191. Actual: ' + (parseInt("1111111111111", 2)));
}

//CHECK#14
if (parseInt("11111111111111", 2) !== 16383) {
  throw new Test262Error('#14: parseInt("11111111111111", 2) === 16383. Actual: ' + (parseInt("11111111111111", 2)));
}

//CHECK#15
if (parseInt("111111111111111", 2) !== 32767) {
  throw new Test262Error('#15: parseInt("111111111111111", 2) === 32767. Actual: ' + (parseInt("111111111111111", 2)));
}

//CHECK#16
if (parseInt("1111111111111111", 2) !== 65535) {
  throw new Test262Error('#16: parseInt("1111111111111111", 2) === 65535. Actual: ' + (parseInt("1111111111111111", 2)));
}

//CHECK#17
if (parseInt("11111111111111111", 2) !== 131071) {
  throw new Test262Error('#17: parseInt("11111111111111111", 2) === 131071. Actual: ' + (parseInt("11111111111111111", 2)));
}

//CHECK#18
if (parseInt("111111111111111111", 2) !== 262143) {
  throw new Test262Error('#18: parseInt("111111111111111111", 2) === 262143. Actual: ' + (parseInt("111111111111111111", 2)));
}

//CHECK#19
if (parseInt("1111111111111111111", 2) !== 524287) {
  throw new Test262Error('#19: parseInt("1111111111111111111", 2) === 524287. Actual: ' + (parseInt("1111111111111111111", 2)));
}

//CHECK#20
if (parseInt("11111111111111111111", 2) !== 1048575) {
  throw new Test262Error('#20: parseInt("11111111111111111111", 2) === 1048575. Actual: ' + (parseInt("11111111111111111111", 2)));
}
