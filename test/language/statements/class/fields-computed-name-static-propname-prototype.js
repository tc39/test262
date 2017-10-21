// This file was procedurally generated from the following sources:
// - src/class-fields/static-propname-prototype.case
// - src/class-fields/propname-error/cls-decl-computed-name.template
/*---
description: Static class fields cannot have PropName 'prototype' (computed)
esid: sec-class-definitions-static-semantics-early-errors
features: [class-fields]
flags: [generated]
info: |
    Static Semantics: PropName
    ...
    ComputedPropertyName : [ AssignmentExpression ]
      Return empty.

    
    // This test file tests the following early error:
    Static Semantics: Early Errors

      ClassElement : staticFieldDefinition;
        It is a Syntax Error if PropName of FieldDefinition is "prototype" or "constructor".

---*/


var x = "prototype";
class C {
  static [x];
}

var c = new C();

assert.sameValue(c.hasOwnProperty("prototype"), true);
