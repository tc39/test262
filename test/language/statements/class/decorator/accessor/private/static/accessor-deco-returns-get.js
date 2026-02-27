// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-returns-get.case
// - src/decorator/accessors/standard/private/static/cls-decl.template
/*---
description: Accessor decorator can return a new getter (private static acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
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


class C {
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

assert.sameValue(classOrInstance.getElement(), 123);
