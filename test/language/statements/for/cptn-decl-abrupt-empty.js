// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.7.4.7
description: >
    Completion value when head has a declaration but no "test" expression
info: >
    IterationStatement :
      for ( var VariableDeclarationList ; Expressionopt ; Expressionopt ) Statement

    1. Let varDcl be the result of evaluating VariableDeclarationList.
    2. ReturnIfAbrupt(varDcl).
    3. Return ForBodyEvaluation(the first Expression, the second Expression,
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

assert.sameValue(eval('1; for (var run = true; ; ) { break; }'), undefined);
assert.sameValue(
  eval('2; for (var first = true; ; ) { if (!first) { break; } first = false; 3; }'),
  3,
  'Updating an empty completion from a prior iteration.'
);

assert.sameValue(eval('4; outer: do { for (var run = true; ; ) { continue outer; } } while (false)'), undefined);
assert.sameValue(
  eval('5; outer: do { for (var first = true; ; ) { if (!first) { continue outer; } first = false; 6; } } while (false)'),
  6,
  'Updating an empty completion from a prior iteration.'
);
