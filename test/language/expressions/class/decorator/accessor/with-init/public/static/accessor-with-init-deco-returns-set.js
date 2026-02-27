// This file was procedurally generated from the following sources:
// - src/decorator/accessor-with-init-deco-returns-set.case
// - src/decorator/accessors/with-init/public/static/cls-expr.template
/*---
description: Accessor decorator can return a new setter when initializer is present (public static with initializer acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
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


var C = class {
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

assert.sameValue(classOrInstance.getElement(), 123);
classOrInstance.setElement(456);
assert.sameValue(classOrInstance.getElement(), 789);
