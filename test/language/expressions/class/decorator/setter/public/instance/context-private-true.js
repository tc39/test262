// This file was procedurally generated from the following sources:
// - src/decorator/context-private-true.case
// - src/decorator/setters/standard/public/instance/cls-expr.template
/*---
description: Context `private` is false for all types of public elements (public setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, false);
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


