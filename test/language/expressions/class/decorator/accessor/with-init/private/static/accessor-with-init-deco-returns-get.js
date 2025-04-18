// This file was procedurally generated from the following sources:
// - src/decorator/accessor-with-init-deco-returns-get.case
// - src/decorator/accessors/with-init/private/static/cls-expr.template
/*---
description: Accessor decorator can return a new getter (private static with initializer acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec({ get }) {
  return {
    get() {
      assert.sameValue(get.call(this), 123);
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
