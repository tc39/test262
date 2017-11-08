// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  static class fields forbid PropName 'prototype' (no early error for
  ComputedPropertyName)
esid: sec-class-definitions-static-semantics-early-errors
features: [class-fields]
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

class C {
  static ["prototype"];
}

assert.throws(TypeError, function() {
  new C();
}, "Cannot redefine a non-configurable, non-writable prototype property");
