/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  parseFloat(string)
esid: pending
---*/

assert.sameValue(parseFloat("Infinity"), Infinity);
assert.sameValue(parseFloat("+Infinity"), Infinity);
assert.sameValue(parseFloat("-Infinity"), -Infinity);

assert.sameValue(parseFloat("inf"), NaN);
assert.sameValue(parseFloat("Inf"), NaN);
assert.sameValue(parseFloat("infinity"), NaN);

assert.sameValue(parseFloat("nan"), NaN);
assert.sameValue(parseFloat("NaN"), NaN);
