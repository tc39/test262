// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-phases.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Order of decorators (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, class]
flags: [generated]
info: |
    With decorators, definition and instantiation happens in 3 main observable
    phases:

      1. Pre-definition:

          Class key expressions and decorator expressions are evaluated, giving us
          all the concrete values that are needed to fully evaluate the class
          definition.

      2. Decorator application and method assignment:

          Decorators are applied to each class element, and methods are
          assigned to the class prototype (or class for static methods). Class
          decorators are run after all other decorators, and the class identifier
          is rebound to the final return value.

      3. Static initialization:

          Static method extra initializers are run, then static blocks and fields
          are initialized and assigned and field extra initializers are run.
          Finally, class extra initializers are run. The class is now fully
          defined.

      4. Class instantiation:

          The last phases instantiation, when an instance is created. Instance
          method and field extra initializers are run.

    This test compares the relative ordering of these phases, and other tests
    check the ordering within each phase

---*/


var ord = [];

function pushOrd(evalOrd, applyOrd, initOrd) {
  ord.push(evalOrd);

  return (value, context) => {
    ord.push(applyOrd);

    context.addInitializer(() => ord.push(initOrd));
  }
}

ord.push(0);


var C = @pushOrd(1, 6, 7)
 class {
  @pushOrd(2, 4, 9)
  a() {}

  @pushOrd(3, 5, 10)
  b() {}

}

ord.push(8);

new C();

assert.sameValue(ord.length, 11);
ord.forEach(assert.sameValue);
