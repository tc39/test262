// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-method.case
// - src/decorator/methods/standard/public/instance/cls-expr.template
/*---
description: Context kind is the string "method" when decorating a method (public method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "method");
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


