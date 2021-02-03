// Copyright (C) 2021 Matthew "strager" Glazar. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Applied to ParenthesizedExpression (ObjectLiteral)
info: |
  12.15.1 Static Semantics: Early Errors

  AssignmentExpression : LeftHandSideExpression = AssignmentExpression

  If LeftHandSideExpression is neither an ObjectLiteral nor an ArrayLiteral, the
  following Early Error rule is applied:

  - It is a Syntax Error if AssignmentTargetType of LeftHandSideExpression is
    not simple.

  12.2.10.3 Static Semantics: AssignmentTargetType

  ParenthesizedExpression: (Expression)

  1. Return AssignmentTargetType of Expression.

  12.2.1.5 Static Semantics: AssignmentTargetType

  PrimaryExpression: ObjectLiteral

  1. Return invalid.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

({}) = {};
