/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-shell.js, sm/non262-strict-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
function fn() {
  return function(a, b, c) { };
}

assert.sameValue(testLenientAndStrict('var f = fn(); delete f.prototype',
                              returns(false), raisesException(TypeError)),
         true);

