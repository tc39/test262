// This file was procedurally generated from the following sources:
// - src/decorator/accessor-with-init-deco-returns-set.case
// - src/decorator/accessors/with-init/private/static/cls-decl.template
/*---
description: Accessor decorator can return a new setter when initializer is present (private static with initializer acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec({ set }) {
  return {
    set(value) {
      assert.sameValue(value, 456);
      set.call(this, 789);
    }
  };
}


class C {
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

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 789);
