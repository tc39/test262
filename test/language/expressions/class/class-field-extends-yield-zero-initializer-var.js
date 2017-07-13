// This file was procedurally generated from the following sources:
// - src/class-fields/yield-zero-initializer-var.case
// - src/class-fields/default/cls-decl-extends.template
/*---
description: yield var zero initialized (class fields)
flags: [generated]
includes: [propertyHelper.js]
info: |
    1.1 New Productions

    [...]

    FieldDefinitionList [Yield, Await]:
      FieldDefinition [?Yield, ?Await]
      FieldDefinitionList  [?Yield, ?Await], FieldDefinition [?Yield, ?Await]

---*/


class Base {}
class C extends Base {
  yield = 0

  constructor() {
    super();
    assert.sameValue(this.yield, 0);
      verifyEnumerable(this, "yield");
      verifyWritable(this, "yield");
      verifyConfigurable(this, "yield");
  }
}

const c = new C();
