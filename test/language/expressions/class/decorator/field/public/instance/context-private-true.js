// This file was procedurally generated from the following sources:
// - src/decorator/context-private-true.case
// - src/decorator/fields/standard/public/instance/cls-expr.template
/*---
description: Context `private` is false for all types of public elements (public field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, false);
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


