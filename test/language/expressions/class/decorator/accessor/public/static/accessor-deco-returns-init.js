// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-returns-init.case
// - src/decorator/accessors/standard/public/static/cls-expr.template
/*---
description: Accessor decorator can return a new init (public static acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
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


var C = class {
  @dec

  static accessor element;

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
assert.sameValue(classOrInstance.getElement(), 456);
