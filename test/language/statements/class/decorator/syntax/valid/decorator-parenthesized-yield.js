// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A parenthesized decorator can contain a yield expression
esid: prod-DecoratorParenthesizedExpression
features: [decorators, generators]
---*/

var called = false;
function dec() {
  called = true;
}

function* g() {
  class A {
    @(yield 'first') method() {}
  }
}

var iter = g();
assert.sameValue(iter.next().value, 'first', 'the yield expression runs');
assert.sameValue(iter.next(dec).done, true, 'the generator completes');
assert.sameValue(called, true, 'the value that the generator received is the decorator');
