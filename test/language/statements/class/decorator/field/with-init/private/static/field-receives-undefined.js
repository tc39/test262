// This file was procedurally generated from the following sources:
// - src/decorator/field-receives-undefined.case
// - src/decorator/fields/with-init/private/static/cls-decl.template
/*---
description: Value passed to field decorators is undefined (private static with initializer field decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


class C {
  @dec
  static #element = 123
;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;


