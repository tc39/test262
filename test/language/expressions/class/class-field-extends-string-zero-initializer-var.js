// This file was procedurally generated from the following sources:
// - src/class-fields/string-zero-initializer-var.case
// - src/class-fields/default/cls-decl-extends.template
/*---
description: string var zero initializer (class fields)
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
  'a' = 0;

  constructor() {
    super();
    assert.sameValue(this.a, 0);
      verifyEnumerable(this, "a");
      verifyWritable(this, "a");
      verifyConfigurable(this, "a");
  }
}

const c = new C();
