// This file was procedurally generated from the following sources:
// - src/decorator/context-static-true.case
// - src/decorator/fields/standard/public/static/cls-expr.template
/*---
description: Context `static` is true for all types of static elements (public static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, true);
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


