/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  Object.getOwnPropertyNames should play nicely with enumerator caching
esid: pending
---*/

for (var p in JSON);
var names = Object.getOwnPropertyNames(JSON);
assert.sameValue(names.length >= 2, true,
         "wrong number of property names?  [" + names + "]");
assert.sameValue(names.indexOf("parse") >= 0, true);
assert.sameValue(names.indexOf("stringify") >= 0, true);
