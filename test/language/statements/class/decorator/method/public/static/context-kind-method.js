// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-method.case
// - src/decorator/methods/standard/public/static/cls-decl.template
/*---
description: Context kind is the string "method" when decorating a method (public static method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "method");
}


class C {
  @dec
  static element() {
    return 123;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;


