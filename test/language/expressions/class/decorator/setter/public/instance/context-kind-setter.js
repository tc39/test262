// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-setter.case
// - src/decorator/setters/standard/public/instance/cls-expr.template
/*---
description: Context kind is the string "setter" when decorating a method (public setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "setter");
}

var C = class {
  internalValue = 123;

  @dec
  set element(value) {
    this.internalValue = value;
  }

  getElement() {
    return this.internalValue;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();


