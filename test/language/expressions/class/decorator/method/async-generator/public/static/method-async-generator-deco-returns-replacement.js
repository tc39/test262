// This file was procedurally generated from the following sources:
// - src/decorator/method-async-generator-deco-returns-replacement.case
// - src/decorator/methods/async-generator/public/static/cls-expr.template
/*---
description: Can replace a decorated async generator method with a new method (public static async generator method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, async-iteration, class]
flags: [generated]
---*/


function dec(value, context) {
  var iter = value();
  assert.sameValue(typeof iter.next, 'function');
  assert.sameValue(typeof iter.return, 'function');

  return () => 456;
}


var C = class {
  @dec

  static async * element() {
    return 123;
  }

  static getElement() {
    return this.element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement()(), 456);
