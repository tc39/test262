// This file was procedurally generated from the following sources:
// - src/decorator/context-access-set.case
// - src/decorator/setters/standard/private/static/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (private static setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}

var C = class {
  static internalValue = 123;

  @dec

  static set #element(value) {
    this.internalValue = value;
  }

  static getElement() {
    return this.internalValue;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;

access.set(classOrInstance, 456);
assert.sameValue(classOrInstance.getElement(), 456);
