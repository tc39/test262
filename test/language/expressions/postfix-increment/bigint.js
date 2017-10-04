// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Postfix increment for references to BigInt values
esid: sec-postfix-increment-operator-runtime-semantics-evaluation
info: |
  1. Let expr be the result of evaluating UnaryExpression.
  2. Let oldValue be ? ToNumeric(? GetValue(expr)).
  3. Let newValue be ? Type(oldvalue)::add(oldValue, Type(oldValue)::unit).
  4. Perform ? PutValue(expr, newValue).
  5. Return oldValue. 

features: [BigInt]
---*/

var x = 0n;
assert.sameValue(x++, 0n);
assert.sameValue(x, 1n);

var x = -1n;
assert.sameValue(x++, -1n);
assert.sameValue(x, 0n);

var x = 123456n;
assert.sameValue(x++, 123456n);
assert.sameValue(x, 123457n);

var x = -123457n;
assert.sameValue(x++, -123457n);
assert.sameValue(x, -123456n);

var x = 0x1fffffffffffff00n;
assert.sameValue(x++, 0x1fffffffffffff00n);
assert.sameValue(x, 0x1fffffffffffff01n);

var x = -0x1fffffffffffff01n;
assert.sameValue(x++, -0x1fffffffffffff01n);
assert.sameValue(x, -0x1fffffffffffff00n);

var x = {y:0n};
assert.sameValue(x.y++, 0n);
assert.sameValue(x.y, 1n);

var x = {y:{z:0n}};
assert.sameValue(x.y.z++, 0n);
assert.sameValue(x.y.z, 1n);

var x = [0n];
assert.sameValue(x[0]++, 0n);
assert.sameValue(x[0], 1n);

var x = [null, [null, null, 0n]];
assert.sameValue(x[1][2]++, 0n);
assert.sameValue(x[1][2], 1n);

var x = {y:[0n]};
assert.sameValue(x.y[0]++, 0n);
assert.sameValue(x.y[0], 1n);

var x = [{z:0n}];
assert.sameValue(x[0].z++, 0n);
assert.sameValue(x[0].z, 1n);
