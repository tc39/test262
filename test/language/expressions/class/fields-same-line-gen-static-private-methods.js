// This file was procedurally generated from the following sources:
// - src/class-fields/static-private-methods.case
// - src/class-fields/productions/cls-expr-same-line-generator.template
/*---
description: static private methods (field definitions followed by a generator method in the same line)
esid: prod-FieldDefinition
features: [class-static-methods-private, class, class-fields-public, generators]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement :
      ...
      static FieldDefinition ;

    FieldDefinition :
      ClassElementName Initializer_opt

    ClassElementName :
      PrivateName

    PrivateName :
      # IdentifierName

---*/


var C = class {
  static #xVal; static #yVal; *m() { return 42; }
  static #x(value) {
    this.#xVal = value;
    return this.#xVal;
  }
  static #y(value) {
    this.#y = value;
    return this.#yVal;
  }
  static x() {
    return this.#x(42);
  }
  static y() {
    return this.#y(43);
  }
}

var c = new C();

assert.sameValue(c.m().next().value, 42);
assert.sameValue(c.m, C.prototype.m);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

// Test the private methods do not appear as properties before set to value
assert.sameValue(Object.hasOwnProperty.call(C.prototype, "#xVal"), false, "test 1");
assert.sameValue(Object.hasOwnProperty.call(C, "#xVal"), false, "test 2");
assert.sameValue(Object.hasOwnProperty.call(c, "#xVal"), false, "test 3");

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "#yVal"), false, "test 4");
assert.sameValue(Object.hasOwnProperty.call(C, "#yVal"), false, "test 5");
assert.sameValue(Object.hasOwnProperty.call(c, "#yVal"), false, "test 6");

// Test if private fields can be sucessfully accessed and set to value
assert.sameValue(C.x(), 42, "test 7");
assert.sameValue(C.y(), 43, "test 8");

// Test the private fields do not appear as properties before after set to value
assert.sameValue(Object.hasOwnProperty.call(C, "#xVal"), false, "test 9");
assert.sameValue(Object.hasOwnProperty.call(C, "#yVal"), false, "test 10");
