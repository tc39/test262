// This file was procedurally generated from the following sources:
// - src/decorator/context-private-true.case
// - src/decorator/methods/standard/public/instance/cls-expr.template
/*---
description: Context `private` is false for all types of public elements (public method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, false);
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


