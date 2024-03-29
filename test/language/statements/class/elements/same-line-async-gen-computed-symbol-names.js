// This file was procedurally generated from the following sources:
// - src/class-elements/computed-symbol-names.case
// - src/class-elements/productions/cls-decl-after-same-line-async-gen.template
/*---
description: Computed property symbol names (field definitions after an async generator in the same line)
esid: prod-FieldDefinition
features: [class-fields-public, Symbol, computed-property-names, class, async-iteration]
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
var x = Symbol();
var y = Symbol();



class C {
  async *m() { return 42; } [x]; [y] = 42;
  
}

var c = new C();

assert(
  !Object.prototype.hasOwnProperty.call(c, "m"),
  "m doesn't appear as an own property on the C instance"
);
assert.sameValue(c.m, C.prototype.m);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
}, {restore: true});

c.m().next().then(function(v) {
  assert.sameValue(v.value, 42);
  assert.sameValue(v.done, true);

  function assertions() {
    // Cover $DONE handler for async cases.
    function $DONE(error) {
      if (error) {
        throw new Test262Error('Test262:AsyncTestFailure')
      }
    }
    assert(
      !Object.prototype.hasOwnProperty.call(C.prototype, x),
      "Symbol x doesn't appear as an own property on C prototype"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(C, x),
      "Symbol x doesn't appear as an own property on C constructor"
    );

    verifyProperty(c, x, {
      value: undefined,
      enumerable: true,
      writable: true,
      configurable: true
    });

    assert(
      !Object.prototype.hasOwnProperty.call(C.prototype, y),
      "Symbol y doesn't appear as an own property on C prototype"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(C, y),
      "Symbol y doesn't appear as an own property on C constructor"
    );

    verifyProperty(c, y, {
      value: 42,
      enumerable: true,
      writable: true,
      configurable: true
    });

    assert(
      !Object.prototype.hasOwnProperty.call(C.prototype, "x"),
      "x doesn't appear as an own property on C prototype"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(C, "x"),
      "x doesn't appear as an own property on C constructor"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(c, "x"),
      "x doesn't appear as an own property on C instance"
    );

    assert(
      !Object.prototype.hasOwnProperty.call(C.prototype, "y"),
      "y doesn't appear as an own property on C prototype"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(C, "y"),
      "y doesn't appear as an own property on C constructor"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(c, "y"),
      "y doesn't appear as an own property on C instance"
    );
  }

  return Promise.resolve(assertions());
}).then($DONE, $DONE);
