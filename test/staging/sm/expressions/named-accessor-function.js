/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  { get x y() { } } is not valid getter syntax
esid: pending
---*/
// Contributor:
//   Jeff Walden <jwalden+code@mit.edu>

var BAD_CODE = ["({ get x y() { } })", "({ set x y(v) { } })"];

for (var i = 0, sz = BAD_CODE.length; i < sz; i++)
{
  var code = BAD_CODE[i];

  assert.throws(SyntaxError, function() {
    eval(code);
  }, "bad or no exception thrown for eval(" + code + ")");

  assert.throws(SyntaxError, function() {
    Function(code);
  }, "bad or no exception thrown for Function(" + code + ")");
}
