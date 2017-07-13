// This file was procedurally generated from the following sources:
// - src/class-fields/computed-name-zero-initializer-var-new-line-asi.case
// - src/class-fields/default/cls-decl.template
/*---
description: computed name zero initialized var and newline (ASI) (class fields)
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
  ['a'] = 0

  constructor() {
    assert.sameValue(this.a, 0);
      verifyEnumerable(this, "a");
      verifyWritable(this, "a");
      verifyConfigurable(this, "a");
  }
}

const c = new C();
