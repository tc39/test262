// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-field.case
// - src/decorator/fields/standard/private/instance/cls-expr.template
/*---
description: Context kind is the string "field" when decorating a field (private field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "field");
}


var C = class {
  @dec
  #element;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();


