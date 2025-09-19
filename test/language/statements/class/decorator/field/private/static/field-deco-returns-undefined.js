// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-returns-undefined.case
// - src/decorator/fields/standard/private/static/cls-decl.template
/*---
description: Decorator can return undefined (private static field decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


class C {
  @dec

  static #element;

  static getElement() {
    return this.#element;
  }

  static setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), undefined);
