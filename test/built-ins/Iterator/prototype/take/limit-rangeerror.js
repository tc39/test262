// Copyright (C) 2020 Rick Waldron. All rights reserved.
// Copyright (C) 2026 Tetsuharu Ohzeki. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.take
description: >
  Throws a RangeError exception when limit argument is NaN, infinite, greater than 2^53 - 1, or less than 0.
info: |
  %Iterator.prototype%.take ( limit )

  6. If numLimit is NaN, throw a RangeError exception.
  7. If numLimit is finite and numLimit > 𝔽(2**53 - 1), throw a RangeError exception.
  8. Let integerLimit be ! ToIntegerOrInfinity(numLimit).
  9. If integerLimit < 0, throw a RangeError exception.

features: [iterator-helpers]
---*/
let iterator = (function* () {})();

iterator.take(0);
iterator.take(-0.5);
iterator.take(null);
iterator.take(Number.MAX_SAFE_INTEGER);

assert.throws(RangeError, () => {
  iterator.take(-1);
});

assert.throws(RangeError, () => {
  iterator.take();
});

assert.throws(RangeError, () => {
  iterator.take(undefined);
});

assert.throws(RangeError, () => {
  iterator.take(NaN);
});

assert.throws(RangeError, () => {
  iterator.take(Number.MAX_SAFE_INTEGER + 1); // 2 ** 53
});

assert.throws(RangeError, () => {
  iterator.take(Number.POSITIVE_INFINITY);
});
