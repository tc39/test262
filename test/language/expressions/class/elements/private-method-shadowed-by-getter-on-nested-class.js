// This file was procedurally generated from the following sources:
// - src/class-elements/private-method-shadowed-by-getter-on-nested-class.case
// - src/class-elements/default/cls-expr.template
/*---
description: PrivateName can be shadowed on inner classes by a private getter (private method) (field definitions in a class expression)
esid: prod-FieldDefinition
features: [class-methods-private, class]
flags: [generated]
info: |
    Updated Productions

    CallExpression[Yield, Await]:
      CoverCallExpressionAndAsyncArrowHead[?Yield, ?Await]
      SuperCall[?Yield, ?Await]
      CallExpression[?Yield, ?Await]Arguments[?Yield, ?Await]
      CallExpression[?Yield, ?Await][Expression[+In, ?Yield, ?Await]]
      CallExpression[?Yield, ?Await].IdentifierName
      CallExpression[?Yield, ?Await]TemplateLiteral[?Yield, ?Await]
      CallExpression[?Yield, ?Await].PrivateName

---*/


var C = class {
  #m() { return 'outer class'; }

  method() { return this.#m(); }

  B = class {
    method(o) {
      return o.#m;
    }

    get #m() { return 'test262'; }
  }
}

let c = new C();
let innerB = new c.B();
assert.sameValue(innerB.method(innerB), 'test262');
assert.sameValue(c.method(), 'outer class');
assert.throws(TypeError, function() {
  innerB.method(c);
}, 'accessed inner class getter from an object of outer class');
