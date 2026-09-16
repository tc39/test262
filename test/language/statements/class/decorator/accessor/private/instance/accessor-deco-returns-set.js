// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-returns-set.case
// - src/decorator/accessors/standard/private/instance/cls-decl.template
/*---
description: Accessor decorator can return a new getter (private acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
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


class C {
  @dec

  accessor #element;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), undefined);
classOrInstance.setElement(123);
assert.sameValue(classOrInstance.getElement(), 456);
