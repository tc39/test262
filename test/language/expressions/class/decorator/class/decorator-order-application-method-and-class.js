// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-application-method-and-class.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Order of decorator application for elements without initializers (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, class]
flags: [generated]
---*/


var ord = [];

function pushOrd(applyOrd, extraInitOrd) {
  return (value, context) => {
    ord.push(applyOrd);
    context.addInitializer(() => ord.push(extraInitOrd));
  }
}


var C = @pushOrd(1, 3)
@pushOrd(0, 2)
 class {
  
}

assert.sameValue(ord.length, 4);
ord.forEach(assert.sameValue);
