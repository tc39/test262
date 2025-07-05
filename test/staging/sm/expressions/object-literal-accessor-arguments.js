/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  { get x(v) { } } and { set x(v, v2) { } } should be syntax errors
esid: pending
---*/

function expectSyntaxError(s)
{
  assert.throws(SyntaxError, function() {
    eval(s);
  }, "expected syntax error parsing '" + s + "'");
}

expectSyntaxError("({ get x(a) { } })");
expectSyntaxError("({ get x(a, a) { } })");
expectSyntaxError("({ get x(a, b) { } })");
expectSyntaxError("({ get x(a, a, b) { } })");
expectSyntaxError("({ get x(a, b, c) { } })");

expectSyntaxError("({ set x() { } })");
expectSyntaxError("({ set x(a, a) { } })");
expectSyntaxError("({ set x(a, b) { } })");
expectSyntaxError("({ set x(a, a, b) { } })");
expectSyntaxError("({ set x(a, b, c) { } })");
