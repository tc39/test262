/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Date.prototype isn't an instance of Date
esid: pending
---*/

assert.sameValue(Date.prototype instanceof Date, false);
assert.sameValue(Date.prototype.__proto__, Object.prototype);
