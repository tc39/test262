// This file was procedurally generated from the following sources:
// - src/decorator/method-deco-returns-replacement.case
// - src/decorator/methods/standard/private/static/cls-decl.template
/*---
description: Can replace a decorated method with a new method (private static method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec(value, context) {
  assert.sameValue(value(), 123);

  return () => 456;
}


class C {
  @dec

  static #element() {
    return 123;
  }

  static getElement() {
    return this.#element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement()(), 456);
