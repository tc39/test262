/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Don't assert parsing |for (var x = 3 of 42);|
esid: pending
---*/

assert.throws(SyntaxError, function() {
  Function("for (var x = 3 of 42);");
});
