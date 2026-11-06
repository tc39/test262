// Copyright (C) 2026 hexbinoct. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A line terminator after "static" does not end a field named "static" when a field name follows
esid: prod-ClassElement
features: [class, class-static-fields-public]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    The "static" FieldDefinition production has no [no LineTerminator here]
    restriction, so a field name on the next line is allowed and no semicolon is
    inserted after "static".
---*/

class A {
  static
  x = 1;

  static
  y
}

assert.sameValue(A.x, 1, "x is a static field");
assert.sameValue(Object.prototype.hasOwnProperty.call(A, "y"), true, "y is a static field");
assert.sameValue(A.y, undefined, "y has no initializer");

var a = new A();
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "static"), false, "there is no field named static");
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "x"), false, "x is not an instance field");
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "y"), false, "y is not an instance field");
