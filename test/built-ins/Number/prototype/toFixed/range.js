// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.prototype.tofixed
description: Number.prototype.toFixed permits fractionDigits from -20 to 100
info: >
  Number.prototype.toFixed ( fractionDigits )

  ...
  3. If _f_ &lt; -20 or _f_ &gt; 100, throw a *RangeError* exception.
  ...
---*/

assert.sameValue((3).toFixed(-20), "0");
assert.throws(RangeError, () => (3).toFixed(-21));

assert.sameValue((3).toFixed(100), "3.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
assert.throws(RangeError, () => (3).toFixed(101));
