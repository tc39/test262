/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  RegExp.length
esid: pending
---*/

assert.sameValue(RegExp.length, 2);
assert.sameValue(/a/.constructor.length, 2);
