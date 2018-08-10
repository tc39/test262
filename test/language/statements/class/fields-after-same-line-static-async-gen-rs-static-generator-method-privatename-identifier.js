// This file was procedurally generated from the following sources:
// - src/class-fields/rs-static-generator-method-privatename-identifier.case
// - src/class-fields/productions/cls-decl-after-same-line-static-async-gen.template
/*---
description: Valid Static GeneratorMethod PrivateName (field definitions after a static async generator in the same line)
esid: prod-FieldDefinition
features: [class-static-methods-private, class, class-fields-public, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    MethodDefinition :
      GeneratorMethod

    GeneratorMethod :
      * ClassElementName ( UniqueFormalParameters ){ GeneratorBody }

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

    IdentifierName ::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart ::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

    IdentifierPart::
      UnicodeIDContinue
      $
      \ UnicodeEscapeSequence
      <ZWNJ> <ZWJ>

    UnicodeIDStart::
      any Unicode code point with the Unicode property "ID_Start"

    UnicodeIDContinue::
      any Unicode code point with the Unicode property "ID_Continue"


    NOTE 3
    The sets of code points with Unicode properties "ID_Start" and
    "ID_Continue" include, respectively, the code points with Unicode
    properties "Other_ID_Start" and "Other_ID_Continue".

---*/


class C {
  static async *m() { return 42; } static * #$(value) {
    yield value;
  }
  static * #_(value) {
    yield value;
  }
  static * #\u{6F}(value) {
    yield value;
  }
  static * #\u2118(value) {
    yield value;
  }
  static * #ZW_\u200C_NJ(value) {
    yield value;
  }
  static * #ZW_\u200D_J(value) {
    yield value;
  };
  static * $(value) {
    yield this.#$(value);
  }
  static * _(value) {
    yield this.#_(value);
  }
  static * \u{6F}(value) {
    yield this.#\u{6F}(value);
  }
  static * \u2118(value) {
    yield this.#\u2118(value);
  }
  static * ZW_\u200C_NJ(value) {
    yield this.#ZW_\u200C_NJ(value);
  }
  static * ZW_\u200D_J(value) {
    yield this.#ZW_\u200D_J(value);
  }

}

var c = new C();

assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(Object.hasOwnProperty.call(C.prototype, "m"), false);

verifyProperty(C, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
}, {restore: true});

assert.sameValue(C.$(1).next().value, 1);
assert.sameValue(C._(1).next().value, 1);
assert.sameValue(C.\u{6F}(1).next().value, 1);
assert.sameValue(C.\u2118(1).next().value, 1);
assert.sameValue(C.ZW_\u200C_NJ(1).next().value, 1);
assert.sameValue(C.ZW_\u200D_J(1).next().value, 1);


C.m().next().then(function(v) {
  assert.sameValue(v.value, 42);
  assert.sameValue(v.done, true);
}, $DONE).then($DONE, $DONE);
