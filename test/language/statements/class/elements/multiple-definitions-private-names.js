// This file was procedurally generated from the following sources:
// - src/class-elements/private-names.case
// - src/class-elements/productions/cls-decl-multiple-definitions.template
/*---
description: private names (multiple fields definitions)
esid: prod-FieldDefinition
features: [class-fields-private, class, class-fields-public]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement :
      ...
      FieldDefinition ;

    FieldDefinition :
      ClassElementName Initializer_opt

    ClassElementName :
      PrivateName

    PrivateName :
      # IdentifierName

---*/


class C {
  foo = "foobar";
  m() { return 42 }
  #x; #y
  m2() { return 39 }
  bar = "barbaz";
  x() {
    this.#x = 42;
    return this.#x;
  }
  y() {
    this.#y = 43;
    return this.#y;
  }
}

var c = new C();

assert.sameValue(c.m(), 42);
assert(
  !Object.prototype.hasOwnProperty.call(c, "m"),
  "m doesn't appear as an own property on the C instance"
);
assert.sameValue(c.m, C.prototype.m);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(c.m2(), 39);
assert(!
  Object.prototype.hasOwnProperty.call(c, "m2"),
  "m2 doesn't appear as an own property on the C instance"
);
assert.sameValue(c.m2, C.prototype.m2);

verifyProperty(C.prototype, "m2", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(c.foo, "foobar");
assert(
  !Object.prototype.hasOwnProperty.call(C, "foo"),
  "foo doesn't appear as an own property on the C constructor"
);
assert(
  !Object.prototype.hasOwnProperty.call(C.prototype, "foo"),
  "foo doesn't appear as an own property on the C prototype"
);

verifyProperty(c, "foo", {
  value: "foobar",
  enumerable: true,
  configurable: true,
  writable: true,
});

assert.sameValue(c.bar, "barbaz");
assert(
  !Object.prototype.hasOwnProperty.call(C, "bar"),
  "bar doesn't appear as an own property on the C constructor"
);
assert(
  !Object.prototype.hasOwnProperty.call(C.prototype, "bar"),
  "bar doesn't appear as an own property on the C prototype"
);

verifyProperty(c, "bar", {
  value: "barbaz",
  enumerable: true,
  configurable: true,
  writable: true,
});

// Test the private fields do not appear as properties before set to value
assert(!Object.prototype.hasOwnProperty.call(C.prototype, "#x"), "test 1");
assert(!Object.prototype.hasOwnProperty.call(C, "#x"), "test 2");
assert(!Object.prototype.hasOwnProperty.call(c, "#x"), "test 3");

assert(!Object.prototype.hasOwnProperty.call(C.prototype, "#y"), "test 4");
assert(!Object.prototype.hasOwnProperty.call(C, "#y"), "test 5");
assert(!Object.prototype.hasOwnProperty.call(c, "#y"), "test 6");

// Test if private fields can be sucessfully accessed and set to value
assert.sameValue(c.x(), 42, "test 7");
assert.sameValue(c.y(), 43, "test 8");

// Test the private fields do not appear as properties before after set to value
assert(!Object.prototype.hasOwnProperty.call(c, "#x"), "test 9");
assert(!Object.prototype.hasOwnProperty.call(c, "#y"), "test 10");
