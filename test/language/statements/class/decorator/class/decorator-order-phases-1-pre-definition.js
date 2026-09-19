// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-phases-1-pre-definition.case
// - src/decorator/class/standard/cls-decl.template
/*---
description: Class pre-definition evaluation phase order (decorator usage in a class declaration)
esid: prod-ClassDeclaration
features: [decorators, class]
flags: [generated]
info: |
    In the pre-definition phase, all expressions that are part of the class
    definition itself are evaluated to get the final concrete values that are
    needed to fully evaluate the class itself. This includes:

    - Dynamic element names
    - Decorator expressions (e.g. `@foo()`, which calls a function and returns a
      decorator)

    These are evaluated in lexical order from top to bottom.

---*/


var ord = [];

// For dynamic element name evaluation order
function dynamicName(name, order) {
  ord.push(order);
  return name;
}

function pushOrd(evalOrd) {
  ord.push(evalOrd);

  return () => {
    // do nothing
  }
}

ord.push(0);


@pushOrd(1)

class C {
  @pushOrd(2)
  [dynamicName('a', 3)]() {}

  @pushOrd(4)
  #b() {}

  @pushOrd(5)
  static [dynamicName('c', 6)]() {}

  @pushOrd(7)
  static #d() {}

  @pushOrd(8)
  [dynamicName('e', 9)] = 123;

  @pushOrd(10)
  #f = 123;

}

ord.push(11);

new C();

ord.push(12);

assert.sameValue(ord.length, 13);
ord.forEach(assert.sameValue);
