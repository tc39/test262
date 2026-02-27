// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-field.case
// - src/decorator/fields/standard/public/static/cls-expr.template
/*---
description: Context kind is the string "field" when decorating a field (public static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "field");
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


