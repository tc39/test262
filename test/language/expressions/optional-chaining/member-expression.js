// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional chain on member expression
info: |
  Left-Hand-Side Expressions
    OptionalExpression:
      MemberExpression OptionalChain
features: [optional-chaining]
---*/

// PrimaryExpression
//   IdentifierReference
//   this
function fn2 () {
  return this?.a
}
assert.sameValue(33, fn2.call({a: 33}));
//   Literal
assert.sameValue(undefined, "hello"?.a);
assert.sameValue(undefined, null?.a);
//   ArrayLiteral
assert.sameValue(2, [1, 2]?.[1]);
//   ObjectLiteral
assert.sameValue(44, {a: 44}?.a);
//   FunctionExpression
assert.sameValue('a', (function a () {}?.name));
//   ClassExpression
assert.sameValue('Foo', (class Foo {}?.name));
//   GeneratorFunction
assert.sameValue('a', (function * a () {}?.name));
//   AsyncFunctionExpression
assert.sameValue('a', (async function a () {}?.name));
//   AsyncGeneratorExpression
assert.sameValue('a', (async function * a () {}?.name));
//   RegularExpressionLiteral
assert.sameValue(true, /[a-z]/?.test('a'));
//   TemplateLiteral
assert.sameValue('h', `hello`?.[0]);
//   CoverParenthesizedExpressionAndArrowParameterList
assert.sameValue(undefined, ({a: 33}, null)?.a);
assert.sameValue(33, (undefined, {a: 33})?.a);

//  MemberExpression [ Expression ]
const arr = [{a: 33}];
assert.sameValue(33, arr[0]?.a);
assert.sameValue(undefined, arr[1]?.a);
