// This file was procedurally generated from the following sources:
// - src/decorator/context-access-set.case
// - src/decorator/setters/standard/private/instance/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (private setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-methods-private]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
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

access.set(classOrInstance, 456);
assert.sameValue(classOrInstance.getElement(), 456);
