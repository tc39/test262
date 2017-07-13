// This file was procedurally generated from the following sources:
// - src/class-fields/empty-var-generator-empty-function.case
// - src/class-fields/default/cls-decl.template
/*---
description: Empty var, generator empty function (class fields)
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
  a; *b(){}

  constructor() {
    assert.sameValue(this.a, undefined);
      verifyEnumerable(this, "a");
      verifyWritable(this, "a");
      verifyConfigurable(this, "a");

      assert.sameValue(typeof Object.getPrototypeOf(this).b, "function");
      verifyNotEnumerable(Object.getPrototypeOf(this), "b");
      verifyConfigurable(Object.getPrototypeOf(this), "b");
  }
}

const c = new C();
