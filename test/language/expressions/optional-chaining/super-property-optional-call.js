// Copyright 2019 Google, LLC.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional call invoked on super method should be equivalent to call
info: |
  OptionalExpression
    MemberExpression OptionalChain
      SuperProperty OptionalChain
features: [optional-chaining]
---*/

let called = false;
class Base {
    method() {
      called = true;
      return this;
    }
}
class Foo extends Base {
    method() {
      return super.method?.();
    }
}
const foo = new Foo();
assert(foo.method() === foo);
assert.sameValue(called, true);
