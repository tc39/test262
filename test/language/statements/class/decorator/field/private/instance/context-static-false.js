// This file was procedurally generated from the following sources:
// - src/decorator/context-static-false.case
// - src/decorator/fields/standard/private/instance/cls-decl.template
/*---
description: Context `static` is false for all types of instance elements (private field decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, false);
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


