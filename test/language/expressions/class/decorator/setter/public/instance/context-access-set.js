// This file was procedurally generated from the following sources:
// - src/decorator/context-access-set.case
// - src/decorator/setters/standard/public/instance/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (public setter decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
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

access.set(classOrInstance, 456);
assert.sameValue(classOrInstance.getElement(), 456);
