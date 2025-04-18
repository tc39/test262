// This file was procedurally generated from the following sources:
// - src/decorator/context-access-get.case
// - src/decorator/methods/standard/public/instance/cls-decl.template
/*---
description: Context access `get` works on all gettable types of values (public method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


var access;

function dec(_, context) {
  access = context.access;
}


class C {
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

