// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: BigInt.asIntN type coercion for bits parameter
esid: pending
info: |
  BigInt.asIntN ( bits, bigint )

  1. Let bits be ? ToIndex(bits).
features: [BigInt, Symbol.toPrimitive, computed-property-names]
---*/

assert.sameValue(BigInt.asIntN(Object(0), 1 n), 0 n, "ToPrimitive: unbox object with internal slot");
assert.sameValue(BigInt.asIntN({
  [Symbol.toPrimitive]: function() {
    return 0;
  }
}, 1 n), 0 n, "ToPrimitive: @@toPrimitive");
assert.sameValue(BigInt.asIntN({
  valueOf: function() {
    return 0;
  }
}, 1 n), 0 n, "ToPrimitive: valueOf");
assert.sameValue(BigInt.asIntN({
  toString: function() {
    return 0;
  }
}, 1 n), 0 n, "ToPrimitive: toString");
assert.sameValue(BigInt.asIntN(Object(NaN), 1 n), 0 n,
  "ToIndex: unbox object with internal slot => NaN => 0");
assert.sameValue(BigInt.asIntN({
  [Symbol.toPrimitive]: function() {
    return NaN;
  }
}, 1 n), 0 n, "ToIndex: @@toPrimitive => NaN => 0");
assert.sameValue(BigInt.asIntN({
  valueOf: function() {
    return NaN;
  }
}, 1 n), 0 n, "ToIndex: valueOf => NaN => 0");
assert.sameValue(BigInt.asIntN({
  toString: function() {
    return NaN;
  }
}, 1 n), 0 n, "ToIndex: toString => NaN => 0");
assert.sameValue(BigInt.asIntN({
  [Symbol.toPrimitive]: function() {
    return undefined;
  }
}, 1 n), 0 n, "ToIndex: @@toPrimitive => undefined => NaN => 0");
assert.sameValue(BigInt.asIntN({
  valueOf: function() {
    return undefined;
  }
}, 1 n), 0 n, "ToIndex: valueOf => undefined => NaN => 0");
assert.sameValue(BigInt.asIntN({
  toString: function() {
    return undefined;
  }
}, 1 n), 0 n, "ToIndex: toString => undefined => NaN => 0");
assert.sameValue(BigInt.asIntN({
  [Symbol.toPrimitive]: function() {
    return null;
  }
}, 1 n), 0 n, "ToIndex: @@toPrimitive => null => 0");
assert.sameValue(BigInt.asIntN({
  valueOf: function() {
    return null;
  }
}, 1 n), 0 n, "ToIndex: valueOf => null => 0");
assert.sameValue(BigInt.asIntN({
  toString: function() {
    return null;
  }
}, 1 n), 0 n, "ToIndex: toString => null => 0");
assert.sameValue(BigInt.asIntN(Object(true), 1 n), -1 n,
  "ToIndex: unbox object with internal slot => true => 1");
assert.sameValue(BigInt.asIntN({
  [Symbol.toPrimitive]: function() {
    return true;
  }
}, 1 n), -1 n, "ToIndex: @@toPrimitive => true => 1");
assert.sameValue(BigInt.asIntN({
  valueOf: function() {
    return true;
  }
}, 1 n), -1 n, "ToIndex: valueOf => true => 1");
assert.sameValue(BigInt.asIntN({
  toString: function() {
    return true;
  }
}, 1 n), -1 n, "ToIndex: toString => true => 1");
assert.sameValue(BigInt.asIntN(Object("1"), 1 n), -1 n,
  "ToIndex: unbox object with internal slot => parse Number");
assert.sameValue(BigInt.asIntN({
  [Symbol.toPrimitive]: function() {
    return "1";
  }
}, 1 n), -1 n, "ToIndex: @@toPrimitive => parse Number");
assert.sameValue(BigInt.asIntN({
  valueOf: function() {
    return "1";
  }
}, 1 n), -1 n, "ToIndex: valueOf => parse Number");
assert.sameValue(BigInt.asIntN({
  toString: function() {
    return "1";
  }
}, 1 n), -1 n, "ToIndex: toString => parse Number");
