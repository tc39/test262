// Copyright (C) 2020 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt literals are valid property names
esid: prod-PropertyName
info: |
  PropertyName[Yield, Await]:
    LiteralPropertyName
    ComputedPropertyName[?Yield, ?Await]

  LiteralPropertyName:
    IdentifierName
    StringLiteral
    NumericLiteral

  NumericLiteral::
    DecimalLiteral
    DecimalBigIntegerLiteral
features: [BigInt, destructuring-binding, class]
---*/

// Object Literal

let o = { 1n: "foo" };
assert.sameValue(o[1n], "foo");
assert.sameValue(o[1], "foo");
assert.sameValue(o["1"], "foo");

// MethodDeclaration

o = { 1n() { return "bar"; } };
assert.sameValue(o[1n](), "bar");
assert.sameValue(o[1](), "bar");
assert.sameValue(o["1"](), "bar");

class C {
  1n() { return "baz"; }
}

let c = new C();
assert.sameValue(c[1n](), "baz");
assert.sameValue(c[1](), "baz");
assert.sameValue(c["1"](), "baz");

// Destructuring

let {1n: a} = {1n: "foo"};
assert.sameValue(a, "foo");

