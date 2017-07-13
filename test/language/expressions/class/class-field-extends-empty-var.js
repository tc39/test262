// This file was procedurally generated from the following sources:
// - src/class-fields/empty-var.case
// - src/class-fields/default/cls-decl-extends.template
/*---
description: Empty var (class fields)
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
  a;

  constructor() {
    super();
    assert.sameValue(this.a, undefined);
      verifyEnumerable(this, "a");
      verifyWritable(this, "a");
      verifyConfigurable(this, "a");
  }
}

const c = new C();
