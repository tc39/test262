// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-unary-operators-static-semantics-early-errors
description: Applied to a "covered" IdentifierReference
info: |
  UnaryExpression :
    ++ UnaryExpression
    -- UnaryExpression

  - It is an early Reference Error if IsValidSimpleAssignmentTarget of
    UnaryExpression is false.

  Static Semantics: IsValidSimpleAssignmentTarget

  IdentifierReference : Identifier

  1. If this IdentifierReference is contained in strict mode code and
     StringValue of Identifier is "eval" or "arguments", return false.
  2. Return true.
---*/

var y = 1;

--(y);

assert.sameValue(y, 0);
