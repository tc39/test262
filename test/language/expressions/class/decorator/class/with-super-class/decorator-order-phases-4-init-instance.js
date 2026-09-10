// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-phases-4-init-instance.case
// - src/decorator/class/with-super-class/cls-expr.template
/*---
description: Class instance creation order (decorator usage in a class expression)
esid: prod-ClassExpression
features: [decorators, class]
flags: [generated]
info: |
    Class instances are created in the following order:

    1. The class constructor begins evaluating
    2. Super class is fully initialized (e.g. `super()` is called)
    3. Prototype method extra initializers are run, finalizing method definitions
    4. Instance field/accessors are assigned, and field/accessor extra
        initializers run immediately after each field/accessor assignment.

---*/


var ord = [];

// For dynamic element name evaluation order
function dynamicName(name, order) {
  ord.push(order);
  return name;
}

function pushOrd(initOrd, extraInitOrd) {
  return (value, context) => {
    if (context.kind === 'field') {
      context.addInitializer(() => ord.push(extraInitOrd));

      return () => ord.push(initOrd);
    } else if (context.kind === 'accessor') {
      context.addInitializer(() => ord.push(extraInitOrd));

      return {
        init() {
          ord.push(initOrd);
        }
      }
    } else {
      context.addInitializer(() => ord.push(initOrd));
    }
  }
}

ord.push(0);



class B {}

var C =  class extends B {
  constructor() {
    ord.push(2);
    super();
    ord.push(13);
  }

  a = ord.push(5);

  @pushOrd(3)
  b() {}

  @pushOrd(7, 8)
  accessor c = ord.push(6);

  @pushOrd(4)
  get d() {}

  accessor f = ord.push(9);

  @pushOrd(11, 12)
  e = ord.push(10);


}

ord.push(1);

new C();

ord.push(14);

assert.sameValue(ord.length, 15);
ord.forEach(assert.sameValue);
