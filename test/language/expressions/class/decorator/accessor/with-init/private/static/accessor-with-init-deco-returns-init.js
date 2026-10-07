// This file was procedurally generated from the following sources:
// - src/decorator/accessor-with-init-deco-returns-init.case
// - src/decorator/accessors/with-init/private/static/cls-expr.template
/*---
description: Accessor decorator can return a new init that chains with default initializer (private static with initializer acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec({ get, set }) {
  return {
    init(value) {
      assert.sameValue(value, 123);
      return 456;
    }
  };
}


var C = class {
  @dec

  static accessor #element = 123
;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 456);
classOrInstance.setElement(789);
assert.sameValue(classOrInstance.getElement(), 789);
