// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.7.4.7
description: >
    Completion value when head has no declaration and no "test" expression
info: >
    IterationStatement :
      for ( Expressionopt ; Expressionopt ; Expressionopt ) Statement

    1. If the first Expression is present, then
       a. Let exprRef be the result of evaluating the first Expression.
       b. Let exprValue be GetValue(exprRef).
       c. ReturnIfAbrupt(exprValue).
    2. Return ForBodyEvaluation(the second Expression, the third Expression,
       Statement, « », labelSet).

    13.7.4.8 Runtime Semantics: ForBodyEvaluation
    1. Let V = undefined.
    [...]
    4. Repeat
       a. If test is not [empty], then
          [...]
       b. Let result be the result of evaluating stmt.
       c. If LoopContinues(result, labelSet) is false, return
          Completion(UpdateEmpty(result, V)).

    13.9.3 Runtime Semantics: Evaluation

    BreakStatement : break ;

    1. Return Completion{[[type]]: break, [[value]]: empty, [[target]]: empty}.
---*/

assert.sameValue(eval('1; for ( ; ; ) { break; }'), undefined);
assert.sameValue(eval('2; for ( ; ; ) { 3; break; }'), 3);
assert.sameValue(
  eval('var first = true; 4; for ( ; ; ) { if (!first) { 5; break; } first = false; }'),
  5,
  'Updating an empty completion from a prior iteration.'
);
assert.sameValue(
  eval('var first = true; 6; for ( ; ; ) { if (!first) { break; } first = false; 7; }'),
  7,
  'Updating an empty completion from a prior iteration.'
);

assert.sameValue(eval('8; outer: do { for ( ; ; ) { continue outer; } } while (false)'), undefined);
assert.sameValue(eval('9; outer: do { for ( ; ; ) { 10; continue outer; } } while (false)'), 10);
assert.sameValue(
  eval('var first = true; 11; outer: do { for ( ; ; ) { if (!first) { 12; continue outer; } first = false; } } while (false)'),
  12,
  'Updating an empty completion from a prior iteration.'
);
assert.sameValue(
  eval('var first = true; 13; outer: do { for ( ; ; ) { if (!first) { continue outer; } first = false; 14; } } while (false)'),
  14,
  'Updating an empty completion from a prior iteration.'
);
