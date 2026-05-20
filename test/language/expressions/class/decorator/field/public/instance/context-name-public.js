// This file was procedurally generated from the following sources:
// - src/decorator/context-name-public.case
// - src/decorator/fields/standard/public/instance/cls-expr.template
/*---
description: Context name is correct for all types of public elements (public field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "element");
}


var C = class {
  @dec
  element;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();


