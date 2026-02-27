// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-returns-get.case
// - src/decorator/accessors/standard/public/instance/cls-decl.template
/*---
description: Accessor decorator can return a new getter (public acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
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

  accessor element;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 123);
