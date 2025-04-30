/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  __proto__ should show up with O.getOwnPropertyNames(O.prototype)
esid: pending
---*/

var keys = Object.getOwnPropertyNames(Object.prototype);
assert.sameValue(keys.indexOf("__proto__") >= 0, true,
         "should have gotten __proto__ as a property of Object.prototype " +
         "(got these properties: " + keys + ")");
