// This file was procedurally generated from the following sources:
// - src/decorator/accessor-with-init-deco-returns-init.case
// - src/decorator/accessors/with-init/public/instance/cls-decl.template
/*---
description: Accessor decorator can return a new init that chains with default initializer (public accessor with initializer decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


function dec({ get, set }) {
  return {
    init(value) {
      assert.sameValue(value, 123);
      return 456;
    }
  };
}


class C {
  @dec

  accessor element = 123
;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), 456);
classOrInstance.setElement(789);
assert.sameValue(classOrInstance.getElement(), 789);
