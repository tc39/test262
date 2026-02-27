// This file was procedurally generated from the following sources:
// - src/decorator/field-deco-returns-undefined.case
// - src/decorator/fields/standard/private/instance/cls-decl.template
/*---
description: Decorator can return undefined (private field decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


class C {
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
