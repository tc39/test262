/*---
esid: pending
features: [optional-chaining]
info: |
  Optional access to super properties is disallowed
negative:
  phase: parse
  type: SyntaxError
---*/

class Parent {
  method() { }
}

class Child extends Parent {
  method() {
    super?.method();
  }
}