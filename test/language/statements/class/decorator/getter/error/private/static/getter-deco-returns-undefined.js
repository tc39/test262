// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-undefined.case
// - src/decorator/getters/standard/private/static/cls-decl.template
/*---
description: Decorator undefined return defaults to previous value (private static getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


function dec1(value, context) {
  return function() {
    assert.sameValue(value.call(this), 123);

    return 456;
  };
}

function dec2() {}


class C {
  static internalValue = 123;

  @dec2 @dec1

  static get #element() {
    return this.internalValue;
  }

  static getElement() {
    return this.#element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 456);
