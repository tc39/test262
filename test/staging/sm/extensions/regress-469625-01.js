/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Array prototype and expression closures
esid: pending
---*/

Array.prototype.__proto__ = function () { return 3; };

assert.throws(TypeError, function() {
  [].__proto__();
});
