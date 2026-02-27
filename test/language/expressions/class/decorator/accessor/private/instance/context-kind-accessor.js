// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-accessor.case
// - src/decorator/accessors/standard/private/instance/cls-expr.template
/*---
description: Context kind is the string "accessor" when decorating a method (private acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "accessor");
}


var C = class {
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


