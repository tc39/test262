// This file was procedurally generated from the following sources:
// - src/decorator/context-private-true.case
// - src/decorator/setters/standard/public/instance/cls-decl.template
/*---
description: Context `private` is false for all types of public elements (public setter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, false);
}

class C {
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



