// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-object-initializer-runtime-semantics-evaluation
es6id: 12.2.6.8
description: Abrupt completion when evaluating expression
info: |
  12.2.6.7 Runtime Semantics: Evaluation

  [...]

  ComputedPropertyName : [ AssignmentExpression ]

  1. Let exprValue be the result of evaluating AssignmentExpression.
  2. Let propName be ? GetValue(exprValue).
---*/

var thrower = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
  ({
    get [thrower()]() {}
  });
}, '`get` accessor');

assert.throws(Test262Error, function() {
  ({
    set [thrower()](_) {}
  });
}, '`set` accessor');
