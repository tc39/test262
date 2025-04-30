/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Object.getOwnPropertyNames: regular expression objects
esid: pending
---*/

var actual = Object.getOwnPropertyNames(/a/);
var expected = ["lastIndex"];

for (var i = 0; i < expected.length; i++)
{
  assert.sameValue(actual.indexOf(expected[i]) >= 0, true,
                expected[i] + " should be a property name on a RegExp");
}
