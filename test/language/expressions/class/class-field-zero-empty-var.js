// This file was procedurally generated from the following sources:
// - src/class-fields/zero-empty-var.case
// - src/class-fields/default/cls-decl.template
/*---
description: zero var (class fields)
flags: [generated]
includes: [propertyHelper.js]
info: |
    1.1 New Productions

    [...]

    FieldDefinitionList [Yield, Await]:
      FieldDefinition [?Yield, ?Await]
      FieldDefinitionList  [?Yield, ?Await], FieldDefinition [?Yield, ?Await]

---*/


class C {
  0;

  constructor() {
    assert.sameValue(this["0"], undefined);
      verifyEnumerable(this, "0");
      verifyWritable(this, "0");
      verifyConfigurable(this, "0");
  }
}

const c = new C();
