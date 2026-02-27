// This file was procedurally generated from the following sources:
// - src/decorator/decorator-order-phases-2-application.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Class definition decorator application order (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, class]
flags: [generated]
info: |
    In the application phase, decorators are applied to each element in the
    following order:

    1. Static methods
    2. Instance methods
    3. Static fields
    4. Instance fields
    5. Class

    Within each group, decorators are applied to each _element_ in lexical order,
    from top to bottom (note: This refers to ordering _between_ elements. Within a
    single element definition, decorators are applied in reverse lexical order.)
    As each method is defined, the method itself is assigned to the prototype or
    class definition.

---*/


var ord = [];

function pushOrd(applyOrd) {
  return () => {
    ord.push(applyOrd);
  }
}

ord.push(0);



var C = @pushOrd(9)

 class {
  @pushOrd(8)
  a = 123;

  @pushOrd(4)
  b() {}

  @pushOrd(1)
  static accessor c = 123;

  @pushOrd(2)
  static get d() {}


  @pushOrd(5)
  accessor e = 123;

  @pushOrd(6)
  get f() {}

  @pushOrd(7)
  static g = 123;

  @pushOrd(3)
  static h() {}


}

ord.push(10);

new C();

ord.push(11);

assert.sameValue(ord.length, 12);
ord.forEach(assert.sameValue);
