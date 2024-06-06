// This file was procedurally generated from the following sources:
// - src/decorator/context-name-public.case
// - src/decorator/fields/standard/public/static/cls-expr.template
/*---
description: Context name is correct for all types of public elements (public static field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "element");
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


