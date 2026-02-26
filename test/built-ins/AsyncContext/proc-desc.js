// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-object
description: >
    Property descriptor of AsyncContext
info: |
    The AsyncContext Object

    The AsyncContext object does not have a [[Construct]] internal method; it
    cannot be used as a constructor with the new operator.

    The AsyncContext object does not have a [[Call]] internal method; it cannot
    be invoked as a function.

    17 ECMAScript Standard Built-in Objects:

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [AsyncContext]
---*/

assert.sameValue(typeof AsyncContext, "object");

assert.throws(TypeError, function() {
  AsyncContext();
}, "no [[Call]]");

assert.throws(TypeError, function() {
  new AsyncContext();
}, "no [[Construct]]");

verifyProperty(this, "AsyncContext", {
  enumerable: false,
  writable: true,
  configurable: true
});
