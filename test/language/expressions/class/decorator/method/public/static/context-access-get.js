// This file was procedurally generated from the following sources:
// - src/decorator/context-access-get.case
// - src/decorator/methods/standard/public/static/cls-expr.template
/*---
description: Context access `get` works on all gettable types of values (public static method decorator behavior in class expression)
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

  static element() {
    return 123;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), access.get(classOrInstance));
