// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-returns-init.case
// - src/decorator/accessors/standard/private/instance/cls-decl.template
/*---
description: Accessor decorator can return a new init (private acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec() {
  return {
    init(value) {
      assert.sameValue(value, undefined);
      return 123;
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

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 456);
