// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-accessor.case
// - src/decorator/accessors/standard/public/instance/cls-decl.template
/*---
description: Context kind is the string "accessor" when decorating a method (public acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "accessor");
}


class C {
  @dec
  accessor element;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();


