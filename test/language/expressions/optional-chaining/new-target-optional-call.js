// Copyright 2019 Google, LLC.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional call invoked on new.target should be equivalent to call
info: |
  OptionalExpression
    MemberExpression OptionalChain
      NewTarget OptionalChain
features: [optional-chaining]
includes: [fnGlobalObject.js]
---*/

const newTargetContext = (function() { return this; })();

let called = false;
function Base() {
  called = true;
  return this;
}
function Foo(blerg) {
  return new.target?.();
}
assert(Reflect.construct(Foo, [], Base) === newTargetContext);
assert.sameValue(called, true);
