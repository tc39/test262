// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-not-last-element-invalid.case
// - src/dstr-assignment/syntax/for-await-of.template
/*---
description: Object rest element needs to be the last AssignmenProperty in ObjectAssignmentPattern. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [object-rest, destructuring-binding, async-iteration]
flags: [generated]
negative:
  phase: early
  type: SyntaxError
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing
        ? ForIn/OfHeadEvaluation(« », AssignmentExpression, async-iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
        keyResult, assignment, labelSet, async).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var rest, b;

for await ({...rest, b} of [{}
]) ;
