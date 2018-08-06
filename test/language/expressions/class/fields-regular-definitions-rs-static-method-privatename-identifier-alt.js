// This file was procedurally generated from the following sources:
// - src/class-fields/rs-static-method-privatename-identifier-alt.case
// - src/class-fields/productions/cls-expr-regular-definitions.template
/*---
description: Valid Static Method PrivateName (regular fields defintion)
esid: prod-FieldDefinition
features: [class-static-fields-private, class, class-fields-public]
flags: [generated]
info: |
    
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      static FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName::
      # IdentifierName

    IdentifierName::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart::
      UnicodeIDStart
      $
      _
      \UnicodeEscapeSequence

    IdentifierPart::
      UnicodeIDContinue
      $
      \UnicodeEscapeSequence
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


var C = class {
  static #$(value) {
    this.$ = value;
    return value;
  }
  static #_(value) {
    this.#stored = value;
    return value;
  }
  static #o(value) {
    this.#stored = value;
    return value;
  }
  static #℘(value) {
    this.#stored = value;
    return value;
  }
  static #ZW_‌_NJ(value) {
    this.#stored = value;
    return value;
  }
  static #ZW_‍_J(value) {
    this.#stored = value;
    return value;
  }
  static $(value) {
    return this.#$(value);
  }
  static _(value) {
    return this.#_(value);
  }
  static o(value) {
    return this.#o(value);
  }
  static ℘(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    return this.#℘(value);
  }
  static ZW_‌_NJ(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    return this.#ZW_‌_NJ(value);
  }
  static ZW_‍_J(value) { // DO NOT CHANGE THE NAME OF THIS FIELD
    return this.#ZW_‍_J(value);
  }

}

var c = new C();

assert.sameValue(C.$(1), 1);
assert.sameValue(C._(1), 1);
assert.sameValue(C.o(1), 1);
assert.sameValue(C.℘(1), 1); // DO NOT CHANGE THE NAME OF THIS FIELD
assert.sameValue(C.ZW_‌_NJ(1), 1); // DO NOT CHANGE THE NAME OF THIS FIELD
assert.sameValue(C.ZW_‍_J(1), 1); // DO NOT CHANGE THE NAME OF THIS FIELD

