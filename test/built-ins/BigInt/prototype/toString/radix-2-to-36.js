// Copyright 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.tostring
description: toString with radix between 2 and 36
info: |
  BigInt.prototype.toString ( [ radix ] )

  [...]
  6. If radixNumber = 10, return ! ToString(x).
  7. Return the String representation of this Number value using the
     radix specified by radixNumber. Letters a-z are used for digits
     with values 10 through 35. The precise algorithm is
     implementation-dependent, however the algorithm should be a
     generalization of that specified in 3.1.4.1.
features: [BigInt]
---*/

for (var r = 2; r <= 36; r++) {
  assert.sameValue((0n).toString(r), "0", "0, radix " + r);
  assert.sameValue((-1n).toString(r), "-1", "-1, radix " + r);
  assert.sameValue((1n).toString(r), "1", "1, radix " + r);
}

var numberOverflow = BigInt(Number.MAX_VALUE) + 1n;
var digits = "0123456789abcdefghijklmnopqrstuvwxyz";
for (var r = 2; r <= 36; r++) {
  var str = numberOverflow.toString(r);

  var val = 0n;
  var R = BigInt(r);
  for (var i = 0; i < str.length; i++) {
    var x = digits.indexOf(str[i]);
    assert(x >= 0);
    val = val * R + BigInt(x);
  }
  assert.sameValue(val, numberOverflow, "Number.MAX_VALUE + 1 round-trip, radix " + r);
}
