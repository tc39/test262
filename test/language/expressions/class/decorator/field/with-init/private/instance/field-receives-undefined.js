// This file was procedurally generated from the following sources:
// - src/decorator/field-receives-undefined.case
// - src/decorator/fields/with-init/private/instance/cls-expr.template
/*---
description: Value passed to field decorators is undefined (private field with initializer decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


var C = class {
  @dec
  #element = 123
;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();


