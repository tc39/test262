// Copyright 2016 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-applying-the-exp-operator
description: If abs(base) is 1 and exponent is −∞, the result is NaN.
---*/


var exponent = -Infinity;
var bases = [];
bases[0] = -1;
bases[1] = 1

for (var i = 0; i < bases.length; i++) {
  if (!isNaN(bases[i] ** exponent)) {
    $ERROR("isNaN(" + bases[i] + " **  " + exponent + ") === false");
  }
}
