// Copyright (C) 2026 hexbinoct. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A line terminator between a method name and its parameters does not end a field
esid: prod-ClassElement
features: [class]
info: |
    ClassElement :
      MethodDefinition
      FieldDefinition ;
      ;

    MethodDefinition :
      ClassElementName ( UniqueFormalParameters ) { FunctionBody }

    FieldDefinition :
      ClassElementName Initializer _opt

    A "(" after a ClassElementName is allowed by MethodDefinition, so no
    semicolon is inserted before it, even after a line terminator.
---*/

class A {
  m
  () { return "m"; }

  get
  () { return "get"; }

  set
  (v) { return "set" + v; }
}

var a = new A();
assert.sameValue(a.m(), "m", "m is a method on the prototype");
assert.sameValue(a.get(), "get", "get is a method on the prototype");
assert.sameValue(a.set(1), "set1", "set is a method on the prototype");
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "m"), false, "there is no field named m");
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "get"), false, "there is no field named get");
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "set"), false, "there is no field named set");
