// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: static class fields forbid PropName 'prototype' (no early error -- PropName of ComputedPropertyName not forbidden value)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-static-fields-public]
info: |
    Static Semantics: PropName
    ...
    ComputedPropertyName : [ AssignmentExpression ]
      Return empty.


    // This test file tests the following early error:
    Static Semantics: Early Errors

      ClassElement : static FieldDefinition;
        It is a Syntax Error if PropName of FieldDefinition is "prototype" or "constructor".

negative:
  phase: parse
  type: SyntaxError

---*/

throw "Test262: This statement should not be evaluated.";

var x = "constructor";
class C {
  static [x];
}
