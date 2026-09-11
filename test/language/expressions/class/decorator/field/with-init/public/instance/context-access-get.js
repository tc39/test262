// This file was procedurally generated from the following sources:
// - src/decorator/context-access-get.case
// - src/decorator/fields/with-init/public/instance/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (public field with initializer decorator behavior in class expression)
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

  element = 123
;

  getElement() {
    return this.element;
  }

  setElement(value) {
    this.element = value;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), access.get(classOrInstance));
