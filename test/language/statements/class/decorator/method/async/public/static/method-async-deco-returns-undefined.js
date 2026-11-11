// This file was procedurally generated from the following sources:
// - src/decorator/method-async-deco-returns-undefined.case
// - src/decorator/methods/async/public/static/cls-decl.template
/*---
description: Decorator undefined return defaults to previous value (public static method decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec1(value, context) {
  assert(value() instanceof Promise);

  return () => 456;
}

function dec2(value, context) {
  assert.sameValue(value(), 456);
}


class C {
  @dec2 @dec1

  static async element() {
    return 123;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement()(), 456);
