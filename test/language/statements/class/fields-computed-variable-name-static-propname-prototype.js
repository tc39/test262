// This file was procedurally generated from the following sources:
// - src/class-fields/static-propname-prototype.case
// - src/class-fields/propname-error-static/cls-decl-static-variable-name.template
/*---
description: static class fields forbid PropName 'prototype' (no early error -- PropName of ComputedPropertyName not forbidden value)
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


var prototype = "foo";
class C {
  static [prototype];
}

assert.sameValue(C.hasOwnProperty("foo"), true);

var c = new C();
assert.sameValue(c.hasOwnProperty("foo"), false);
