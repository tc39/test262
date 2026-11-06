// Copyright (C) 2026 hexbinoct. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A line terminator between "get" and the name does not end a field named "get"
esid: prod-ClassElement
features: [class, class-methods-private]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    MethodDefinition :
      get ClassElementName ( ) { FunctionBody }

    FieldDefinition :
      ClassElementName Initializer _opt

    The getter production has no [no LineTerminator here] restriction, so the
    name on the next line is allowed and no semicolon is inserted after "get".
---*/

class A {
  get
  a() { return "a"; }
}

class B {
  static get
  b() { return "b"; }
}

class C {
  get
  ["c"]() { return "c"; }
}

class D {
  get
  #d() { return "d"; }
  read() { return this.#d; }
}

var a = new A();
assert.sameValue(typeof Object.getOwnPropertyDescriptor(A.prototype, "a").get, "function", "(A) a is a getter on the prototype");
assert.sameValue(a.a, "a", "(A) the getter returns its value");
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "get"), false, "(A) there is no field named get");

assert.sameValue(typeof Object.getOwnPropertyDescriptor(B, "b").get, "function", "(B) b is a static getter");
assert.sameValue(B.b, "b", "(B) the static getter returns its value");
assert.sameValue(Object.prototype.hasOwnProperty.call(B, "get"), false, "(B) there is no static field named get");

var c = new C();
assert.sameValue(typeof Object.getOwnPropertyDescriptor(C.prototype, "c").get, "function", "(C) c is a getter on the prototype");
assert.sameValue(c.c, "c", "(C) the getter returns its value");
assert.sameValue(Object.prototype.hasOwnProperty.call(c, "get"), false, "(C) there is no field named get");

var d = new D();
assert.sameValue(d.read(), "d", "(D) #d is a private getter");
assert.sameValue(Object.prototype.hasOwnProperty.call(d, "get"), false, "(D) there is no field named get");
