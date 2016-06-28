// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-object-initializer-runtime-semantics-evaluation
es6id: 12.2.6.8
description: Computed values as accessor property names (AssignmentExpression)
info: |
  12.2.6.7 Runtime Semantics: Evaluation

  [...]

  ComputedPropertyName : [ AssignmentExpression ]

  1. Let exprValue be the result of evaluating AssignmentExpression.
  2. Let propName be ? GetValue(exprValue).
  3. Return ? ToPropertyKey(propName).
---*/

var stringSet, _, value;
var obj = {
  get [
    _ = 'str' + 'ing'
  ]() { return 'get string'; },
  set [
    _ = 'str' + 'ing'
  ](param) { stringSet = param; }
};

assert.sameValue(obj.string, 'get string');

obj.string = 'set string';
assert.sameValue(stringSet, 'set string');
