/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Promote evald initializer into upvar
esid: pending
---*/

var actual = '';
var expect = '';

test();

function test()
{
  expect = 5;

  (function(){var x;eval("for (x = 0; x < 5; x++);"); actual = x;})();

  assert.sameValue(expect, actual);
}
