// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-application-method-and-class.case
// - src/decorator/methods/standard/private/static/cls-expr.template
/*---
description: Order of decorator application for elements without initializers (private static method decorator behavior in class expression)
esid: prod-MethodDefinition
features: [decorators, class, class-static-methods-private]
flags: [generated]
---*/


var ord = [];

function pushOrd(applyOrd, extraInitOrd) {
  return (value, context) => {
    ord.push(applyOrd);
    context.addInitializer(() => ord.push(extraInitOrd));
  }
}


var C = class {
  @pushOrd(1, 3)
  @pushOrd(0, 2)

  static #element() {
    return 123;
  }

  static getElement() {
    return this.#element;
  }
}

var classOrInstance = C;

assert.sameValue(ord.length, 4);
ord.forEach(assert.sameValue);
