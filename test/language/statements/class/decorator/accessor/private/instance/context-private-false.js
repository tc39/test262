// This file was procedurally generated from the following sources:
// - src/decorator/context-private-false.case
// - src/decorator/accessors/standard/private/instance/cls-decl.template
/*---
description: Context `private` is true for all types of private elements (private acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, true);
}


class C {
  @dec
  accessor #element;

  getElement() {
    return this.#element;
  }

  setElement(value) {
    this.#element = value;
  }
}

var classOrInstance = new C();


