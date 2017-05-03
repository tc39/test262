// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-target-yield-invalid.case
// - src/dstr-assignment/syntax/for-await-of.template
/*---
description: When a `yield` token appears within the DestructuringAssignmentTarget of an AssignmentElement and outside of a generator function body, it behaves as an IdentifierReference. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, onlyStrict]
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

for await ([ x[yield] ] of [[]]) ;
