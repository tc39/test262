// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: class fields forbid PropName 'constructor' (no early error -- PropName of ComputedPropertyName not forbidden value)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-fields-public]
info: |
    Static Semantics: PropName
    ...
    ComputedPropertyName : [ AssignmentExpression ]
      Return empty.


    // This test file tests the following early error:
    Static Semantics: Early Errors

      ClassElement : FieldDefinition;
        It is a Syntax Error if PropName of FieldDefinition is "constructor".

negative:
  phase: parse
  type: SyntaxError

---*/

throw "Test262: This statement should not be evaluated.";

var x = "constructor";
class C {
  [x];
}

var c = new C();

assert.sameValue(c.hasOwnProperty("constructor"), true);
assert.sameValue(C.hasOwnProperty("constructor"), false);
