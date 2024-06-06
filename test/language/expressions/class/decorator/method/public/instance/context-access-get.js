// This file was procedurally generated from the following sources:
// - src/decorator/context-access-get.case
// - src/decorator/methods/standard/public/instance/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (public method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


var C = class {
  @dec

  element() {
    return 123;
  }

  getElement() {
    return this.element;
  }
}

var classOrInstance = new C();

assert.sameValue(classOrInstance.getElement(), access.get(classOrInstance));
