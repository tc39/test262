/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Date.prototype isn't an instance of Date
esid: pending
---*/

assert.sameValue(Date.prototype instanceof Date, false);
assert.sameValue(Date.prototype.__proto__, Object.prototype);
