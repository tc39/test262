// This file was procedurally generated from the following sources:
// - src/decorator/context-private-true.case
// - src/decorator/methods/standard/public/static/cls-decl.template
/*---
description: Context `private` is false for all types of public elements (public static method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.private, false);
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


