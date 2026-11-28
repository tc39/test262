// Copyright (C) 2026 taxor03. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-static-semantics-expectedargumentcount
description: >
  A rest parameter whose binding is a pattern is not counted in the function's length
info: |
  Static Semantics: ExpectedArgumentCount

  FormalParameters :
    [empty]
    FunctionRestParameter

  1. Return 0.

  FormalParameters : FormalParameterList , FunctionRestParameter

  1. Return the ExpectedArgumentCount of FormalParameterList.
features: [destructuring-binding]
---*/

assert.sameValue((function(...[a]) {}).length, 0, "function, array pattern only");
assert.sameValue((function(...{a}) {}).length, 0, "function, object pattern only");
assert.sameValue((function(a, ...[b]) {}).length, 1, "function, array pattern after one parameter");
assert.sameValue((function(a, ...{b}) {}).length, 1, "function, object pattern after one parameter");
assert.sameValue((function(a, b, ...[c, d]) {}).length, 2, "function, array pattern after two parameters");

assert.sameValue(((a, ...[b]) => {}).length, 1, "arrow function, array pattern");
assert.sameValue(((a, ...{b}) => {}).length, 1, "arrow function, object pattern");

assert.sameValue({ m(a, ...[b]) {} }.m.length, 1, "method, array pattern");
assert.sameValue({ m(a, ...{b}) {} }.m.length, 1, "method, object pattern");
