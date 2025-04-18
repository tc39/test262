// This file was procedurally generated from the following sources:
// - src/decorator/accessor-with-init-deco-returns-set.case
// - src/decorator/accessors/with-init/public/instance/cls-decl.template
/*---
description: Accessor decorator can return a new setter when initializer is present (public accessor with initializer decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
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

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 789);
