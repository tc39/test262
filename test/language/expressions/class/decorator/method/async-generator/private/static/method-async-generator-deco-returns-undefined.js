// This file was procedurally generated from the following sources:
// - src/decorator/method-async-generator-deco-returns-undefined.case
// - src/decorator/methods/async-generator/private/static/cls-expr.template
/*---
description: Decorator undefined return defaults to previous value (private static async generator method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, async-iteration, class, class-static-methods-private]
flags: [generated]
---*/


function dec1(value, context) {
  var iter = value();
  assert.sameValue(typeof iter.next, 'function');
  assert.sameValue(typeof iter.return, 'function');

  return () => 456;
}

function dec2(value, context) {
  assert.sameValue(value(), 456);
}


var C = class {
  @dec2 @dec1

  static async * #element() {
    return 123;
  }

  static getElement() {
    return this.#element;
  }
}

var classOrInstance = C;

assert.sameValue(classOrInstance.getElement()(), 456);
