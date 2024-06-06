// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-returns-set.case
// - src/decorator/accessors/standard/private/static/cls-expr.template
/*---
description: Accessor decorator can return a new getter (private static acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec({ set }) {
  return {
    set(value) {
      assert.sameValue(value, 123);
      set.call(this, 456);
    }
  };
}


var C = class {
  @dec

  static accessor #element;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), undefined);
classOrInstance.setElement(123);
assert.sameValue(classOrInstance.getElement(), 456);
