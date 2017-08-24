// This file was procedurally generated from the following sources:
// - src/class-fields/string-literal-names.case
// - src/class-fields/default/cls-expr-after-same-line-async-gen.template
/*---
description: String literal names (field definitions after an async generator in the same line)
features: [class-fields, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/


var C = class {
  async *m() { return 42; } 'a'; "b"; 'c' = 39;
  "d" = 42;
}

var c = new C();

assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(c.m, C.prototype.m);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "a"), false);

verifyProperty(c, "a", {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});

c.m().next().then(function(v) {
  assert.sameValue(v, 42);
}, $DONE).then($DONE, $DONE);
