/*---
esid: pending
info: |
  an optional expression cannot be target of assignment
description: >
  Static Semantics: IsValidSimpleAssignmentTarget
    LeftHandSideExpression:
      OptionalExpression
    Return false.
features: [optional-chaining]
negative:
  type: SyntaxError
  phase: parse
---*/

$DONOTEVALUATE();

const obj = {};

obj?.a = 33;
