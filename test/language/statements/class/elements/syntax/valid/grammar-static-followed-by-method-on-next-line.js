// Copyright (C) 2026 hexbinoct. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A line terminator after "static" does not end a field named "static" when a method follows
esid: prod-ClassElement
features: [class, generators, async-functions]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    MethodDefinition :
      ClassElementName ( UniqueFormalParameters ) { FunctionBody }
      GeneratorMethod
      AsyncMethod
      get ClassElementName ( ) { FunctionBody }

    The "static" MethodDefinition production has no [no LineTerminator here]
    restriction, so a method on the next line is allowed and no semicolon is
    inserted after "static".
---*/

class A {
  static
  m() { return "m"; }

  static
  *g() {}

  static
  async am() {}

  static
  get
  x() { return "x"; }
}

assert.sameValue(A.m(), "m", "m is a static method");
assert.sameValue(Object.prototype.hasOwnProperty.call(A.prototype, "m"), false, "m is not on the prototype");
assert.sameValue(Object.prototype.hasOwnProperty.call(A, "g"), true, "g is a static generator method");
assert.sameValue(Object.prototype.hasOwnProperty.call(A, "am"), true, "am is a static async method");
assert.sameValue(typeof Object.getOwnPropertyDescriptor(A, "x").get, "function", "x is a static getter");
assert.sameValue(A.x, "x", "the static getter returns its value");

var a = new A();
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "static"), false, "there is no field named static");
assert.sameValue(Object.prototype.hasOwnProperty.call(A, "static"), false, "there is no static field named static");
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "get"), false, "there is no field named get");
