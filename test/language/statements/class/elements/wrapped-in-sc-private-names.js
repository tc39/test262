// This file was procedurally generated from the following sources:
// - src/class-elements/private-names.case
// - src/class-elements/productions/cls-decl-wrapped-in-sc.template
/*---
description: private names (fields definition wrapped in semicolons)
esid: prod-FieldDefinition
features: [class-fields-private, class, class-fields-public]
flags: [generated]
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
  ;;;;
  ;;;;;;#x; #y;;;;;;;
  ;;;;
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
