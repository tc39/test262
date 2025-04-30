/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Number.parseFloat(string)
esid: pending
---*/

assert.sameValue(Number.parseFloat("Infinity"), Infinity);
assert.sameValue(Number.parseFloat("+Infinity"), Infinity);
assert.sameValue(Number.parseFloat("-Infinity"), -Infinity);

assert.sameValue(Number.parseFloat("inf"), NaN);
assert.sameValue(Number.parseFloat("Inf"), NaN);
assert.sameValue(Number.parseFloat("infinity"), NaN);

assert.sameValue(Number.parseFloat("nan"), NaN);
assert.sameValue(Number.parseFloat("NaN"), NaN);

/* Number.parseFloat should be the same function object as global parseFloat. */
assert.sameValue(Number.parseFloat, parseFloat);
