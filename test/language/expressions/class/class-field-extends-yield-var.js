// This file was procedurally generated from the following sources:
// - src/class-fields/yield-var.case
// - src/class-fields/default/cls-decl-extends.template
/*---
description: yield var (class fields)
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
  yield

  constructor() {
    super();
    assert.sameValue(this.yield, undefined);
      verifyEnumerable(this, "yield");
      verifyWritable(this, "yield");
      verifyConfigurable(this, "yield");
  }
}

const c = new C();
