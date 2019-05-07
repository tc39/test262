// This file was procedurally generated from the following sources:
// - src/class-elements/private-method-on-nested-class.case
// - src/class-elements/default/cls-decl.template
/*---
description: PrivateName is available on inner classes (private method) (field definitions in a class declaration)
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


class C {
  #m() { return 'test262'; }

  B = class {
    method(o) {
      return o.#m();
    }
  }
}

let c = new C();
let innerB = new c.B();
assert.sameValue(innerB.method(c), 'test262');
