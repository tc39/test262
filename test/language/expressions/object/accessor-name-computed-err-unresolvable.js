// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-object-initializer-runtime-semantics-evaluation
es6id: 12.2.6.8
description: Abrupt completion when resolving reference value
info: |
  12.2.6.7 Runtime Semantics: Evaluation

  [...]

  ComputedPropertyName : [ AssignmentExpression ]

  1. Let exprValue be the result of evaluating AssignmentExpression.
  2. Let propName be ? GetValue(exprValue).
---*/

assert.throws(ReferenceError, function() {
  ({
    get [test262unresolvable]() {}
  });
}, '`get` accessor');

assert.throws(ReferenceError, function() {
  ({
    set [test262unresolvable](_) {}
  });
}, '`set` accessor');
