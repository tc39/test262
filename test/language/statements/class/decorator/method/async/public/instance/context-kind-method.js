// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-method.case
// - src/decorator/methods/async/public/instance/cls-decl.template
/*---
description: Context kind is the string "method" when decorating a method (public method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "method");
}


class C {
  @dec
  async element() {
    return 123;
  }

  getElement() {
    return this.element;
  }
}

var classOrInstance = new C();



