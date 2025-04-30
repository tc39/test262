/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  pobj_ == obj2
esid: pending
---*/

var actual = '';
var expect = '';

test();

function test()
{
  expect = '1111222';

  a = {x: 1};
  b = {__proto__: a};
  c = {__proto__: b};
  objs = [{__proto__: a}, {__proto__: a}, {__proto__: a}, b, {__proto__: a},
          {__proto__: a}];
  for (i = 0; i < 6; i++) {
    actual += ""+c.x;
    objs[i].x = 2;
  }
  actual += c.x;

  assert.sameValue(expect, actual);
}
