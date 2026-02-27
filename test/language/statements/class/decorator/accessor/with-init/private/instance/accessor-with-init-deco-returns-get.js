// This file was procedurally generated from the following sources:
// - src/decorator/accessor-with-init-deco-returns-get.case
// - src/decorator/accessors/with-init/private/instance/cls-decl.template
/*---
description: Accessor decorator can return a new getter (private accessor with initializer decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
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


class C {
  @dec

  accessor #element = 123
;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 456);
