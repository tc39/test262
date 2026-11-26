// This file was procedurally generated from the following sources:
// - src/decorator/context-static-false.case
// - src/decorator/accessors/standard/public/instance/cls-decl.template
/*---
description: Context `static` is false for all types of instance elements (public acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, false);
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


