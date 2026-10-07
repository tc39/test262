// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-getter.case
// - src/decorator/getters/standard/public/instance/cls-expr.template
/*---
description: Context kind is the string "method" when decorating a method (public getter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "getter");
}


var C = class {
  internalValue = 123;

  @dec
  get element() {
    return this.internalValue;
  }

  getElement() {
    return this.element;
  }
}

var classOrInstance = new C();


