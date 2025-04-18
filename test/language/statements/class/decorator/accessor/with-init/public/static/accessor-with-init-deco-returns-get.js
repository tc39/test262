// This file was procedurally generated from the following sources:
// - src/decorator/accessor-with-init-deco-returns-get.case
// - src/decorator/accessors/with-init/public/static/cls-decl.template
/*---
description: Accessor decorator can return a new getter (public static with initializer acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
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

  static accessor element = 123
;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 456);
