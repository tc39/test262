// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-returns-undefined.case
// - src/decorator/fields/standard/public/static/cls-expr.template
/*---
description: Decorator can return undefined (public static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


var C = class {
  @dec

  static element;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), undefined);
