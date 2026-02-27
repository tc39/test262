// This file was procedurally generated from the following sources:
// - src/decorator/context-private-false.case
// - src/decorator/setters/standard/private/instance/cls-expr.template
/*---
description: Context `private` is true for all types of private elements (private setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, true);
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


