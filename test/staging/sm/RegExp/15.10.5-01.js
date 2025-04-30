/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  RegExp.length
esid: pending
---*/

assert.sameValue(RegExp.length, 2);
assert.sameValue(/a/.constructor.length, 2);
