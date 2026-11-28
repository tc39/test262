// Copyright (C) 2026 hexbinoct. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A method can be named "static", with or without the static modifier
esid: prod-ClassElement
features: [class]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    MethodDefinition :
      ClassElementName ( UniqueFormalParameters ) { FunctionBody }

    ClassElementName :
      PropertyName

    "static" is an IdentifierName, so it can be the name of a method. A "("
    after it, on the same line or the next, continues that method definition.
---*/

class A {
  static() { return "prototype"; }
  static static() { return "constructor"; }
}

class B {
  static
  () { return "next line"; }
}

assert.sameValue(A.prototype.static(), "prototype", "(A) static is a method on the prototype");
assert.sameValue(A.static(), "constructor", "(A) static is also a static method");
assert.sameValue(new B().static(), "next line", "(B) static is a method on the prototype");
assert.sameValue(Object.prototype.hasOwnProperty.call(B, "static"), false, "(B) static is not a static method");
assert.sameValue(Object.prototype.hasOwnProperty.call(new B(), "static"), false, "(B) there is no field named static");
