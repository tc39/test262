// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-returns-undefined.case
// - src/decorator/fields/standard/private/instance/cls-expr.template
/*---
description: Decorator can return undefined (private field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(value) {
  assert.sameValue(value, undefined);
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

assert.sameValue(classOrInstance.getElement(), undefined);
