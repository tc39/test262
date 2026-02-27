// This file was procedurally generated from the following sources:
// - src/decorator/context-static-true.case
// - src/decorator/accessors/standard/public/static/cls-decl.template
/*---
description: Context `static` is false for all types of instance elements (public static acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.static, true);
}


class C {
  @dec
  static accessor element;

  static getElement() {
    return this.element;
  }

  static setElement(value) {
    this.element = value;
  }
}

var classOrInstance = C;


