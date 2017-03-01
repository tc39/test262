// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Computed values as accessor property names (string literal containing a line terminator) (Object initializer)
esid: sec-object-initializer-runtime-semantics-evaluation
es6id: 12.2.6.8
info: |
    ObjectLiteral :
      { PropertyDefinitionList }
      { PropertyDefinitionList , }

    1. Let obj be ObjectCreate(%ObjectPrototype%).
    2. Let status be the result of performing PropertyDefinitionEvaluation of
       PropertyDefinitionList with arguments obj and true.

    12.2.6.7 Runtime Semantics: Evaluation

    [...]

    ComputedPropertyName : [ AssignmentExpression ]

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let propName be ? GetValue(exprValue).
    3. Return ? ToPropertyKey(propName).
---*/

var stringSet;
var obj = {
  get ['line\
Terminator'
]() { return 'get string'; },
  set ['line\
Terminator'
](param) { stringSet = param; }
};

assert.sameValue(obj['lineTerminator'], 'get string');

obj['lineTerminator'] = 'set string';
assert.sameValue(stringSet, 'set string');
