// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-returns-get.case
// - src/decorator/accessors/standard/private/instance/cls-expr.template
/*---
description: Accessor decorator can return a new getter (private acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec({ get }) {
  return {
    get() {
      assert.sameValue(get.call(this), undefined);
      return 123;
    }
  };
}


var C = class {
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
