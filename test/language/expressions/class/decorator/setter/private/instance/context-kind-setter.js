// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-setter.case
// - src/decorator/setters/standard/private/instance/cls-expr.template
/*---
description: Context kind is the string "setter" when decorating a method (private setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "setter");
}

var C = class {
  internalValue = 123;

  @dec
  set #element(value) {
    this.internalValue = value;
  }

  getElement() {
    return this.internalValue;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();


