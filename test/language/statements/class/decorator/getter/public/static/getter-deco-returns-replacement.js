// This file was procedurally generated from the following sources:
// - src/decorator/getter-deco-returns-replacement.case
// - src/decorator/getters/standard/public/static/cls-decl.template
/*---
description: Can replace a decorated getter with a new getter (public static getter decorator behavior in class declaration)
esid: prod-MethodDefinition
features: [decorators, class]
flags: [generated]
---*/


function dec(value, context) {

  return function() {
    assert.sameValue(value.call(this), 123);

    return 456;
  };
}


class C {
  static internalValue = 123;

  @dec

  static get element() {
    return this.internalValue;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement(), 456);
