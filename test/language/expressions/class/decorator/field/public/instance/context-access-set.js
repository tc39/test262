// This file was procedurally generated from the following sources:
// - src/decorator/context-access-set.case
// - src/decorator/fields/standard/public/instance/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (public field decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


var C = class {
  @dec

  element;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();

access.set(classOrInstance, 456);
assert.sameValue(classOrInstance.getElement(), 456);
