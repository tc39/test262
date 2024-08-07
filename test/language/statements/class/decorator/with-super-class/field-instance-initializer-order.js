// This file was procedurally generated from the following sources:
// - src/decorator/field-instance-initializer-order.case
// - src/decorator/with-super-class/cls-decl.template
/*---
description: Decorated field instance initializers run after super, before constructor (decorator usage in a class declaration)
esid: prod-FieldDefinition
features: [decorators, class]
flags: [generated]
---*/


var ord = [];

function pushOrd(evalOrd, applyOrd, initOrd, extraOrd) {
  ord.push(evalOrd);

  return (value, context) => {
    ord.push(applyOrd);

    context.addInitializer(() => ord.push(extraOrd));

    return () => {
      ord.push(initOrd);
    }
  }
}


class B {}

class C extends B {
  constructor() {
    ord.push(4);
    super();
    ord.push(10);
  }

  @pushOrd(0, 3, 6, 9)
  @pushOrd(1, 2, 7, 8)
  foo = ord.push(5);

}

new C();

assert.sameValue(ord.length, 11);
ord.forEach(assert.sameValue);
