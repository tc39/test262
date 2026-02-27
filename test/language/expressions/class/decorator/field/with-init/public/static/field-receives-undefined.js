// This file was procedurally generated from the following sources:
// - src/decorator/field-receives-undefined.case
// - src/decorator/fields/with-init/public/static/cls-expr.template
/*---
description: Value passed to field decorators is undefined (public static with initializer field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


var C = class {
  @dec
  static element = 123
;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;


