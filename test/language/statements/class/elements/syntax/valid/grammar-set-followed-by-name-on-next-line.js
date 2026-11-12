// Copyright (C) 2026 hexbinoct. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A line terminator between "set" and the name does not end a field named "set"
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
      set ClassElementName ( PropertySetParameterList ) { FunctionBody }

    FieldDefinition :
      ClassElementName Initializer _opt

    The setter production has no [no LineTerminator here] restriction, so the
    name on the next line is allowed and no semicolon is inserted after "set".
---*/

var stored;

class A {
  set
  a(v) { stored = "a" + v; }
}

class B {
  static set
  b(v) { stored = "b" + v; }
}

class C {
  set
  ["c"](v) { stored = "c" + v; }
}

class D {
  set
  #d(v) { stored = "d" + v; }
  write(v) { this.#d = v; }
}

var a = new A();
assert.sameValue(typeof Object.getOwnPropertyDescriptor(A.prototype, "a").set, "function", "(A) a is a setter on the prototype");
a.a = 1;
assert.sameValue(stored, "a1", "(A) the setter is called");
assert.sameValue(Object.prototype.hasOwnProperty.call(a, "set"), false, "(A) there is no field named set");

assert.sameValue(typeof Object.getOwnPropertyDescriptor(B, "b").set, "function", "(B) b is a static setter");
B.b = 2;
assert.sameValue(stored, "b2", "(B) the static setter is called");
assert.sameValue(Object.prototype.hasOwnProperty.call(B, "set"), false, "(B) there is no static field named set");

var c = new C();
assert.sameValue(typeof Object.getOwnPropertyDescriptor(C.prototype, "c").set, "function", "(C) c is a setter on the prototype");
c.c = 3;
assert.sameValue(stored, "c3", "(C) the setter is called");
assert.sameValue(Object.prototype.hasOwnProperty.call(c, "set"), false, "(C) there is no field named set");

var d = new D();
d.write(4);
assert.sameValue(stored, "d4", "(D) #d is a private setter");
assert.sameValue(Object.prototype.hasOwnProperty.call(d, "set"), false, "(D) there is no field named set");
