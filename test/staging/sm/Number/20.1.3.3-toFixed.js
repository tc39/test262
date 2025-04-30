/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
assert.sameValue(Number.prototype.toFixed.call(-Infinity), "-Infinity");
assert.sameValue(Number.prototype.toFixed.call(Infinity), "Infinity");
assert.sameValue(Number.prototype.toFixed.call(NaN), "NaN");

assert.throws(RangeError, () => Number.prototype.toFixed.call(-Infinity, 555));
assert.throws(RangeError, () => Number.prototype.toFixed.call(Infinity, 555));
assert.throws(RangeError, () => Number.prototype.toFixed.call(NaN, 555));

assert.throws(TypeError, () => Number.prototype.toFixed.call("Hello"));

