/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Do not assert: pobj_ == obj2
esid: pending
---*/

var actual = '';
var expect = '';

test();

function test()
{
  expect = '12';

  a = {x: 1};
  b = {__proto__: a};
  c = {__proto__: b};
  for (i = 0; i < 2; i++) {
    actual += c.x;
    b.x = 2;
  }

  assert.sameValue(expect, actual);
}
