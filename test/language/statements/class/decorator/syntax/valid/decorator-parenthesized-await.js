// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A parenthesized decorator can contain an await expression
esid: prod-DecoratorParenthesizedExpression
flags: [async]
includes: [asyncHelpers.js]
features: [decorators, async-functions]
---*/

var called = false;
function dec() {
  called = true;
}

asyncTest(async function() {
  class A {
    @(await Promise.resolve(dec)) method() {}
  }
  assert.sameValue(called, true, 'the awaited value is the decorator');
});
