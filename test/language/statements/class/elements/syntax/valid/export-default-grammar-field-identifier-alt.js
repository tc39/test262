// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-field-identifier-alt.case
// - src/class-elements/syntax/valid/cls-decl-elements-valid-syntax-export-default.template
/*---
description: Valid FieldDefinition, ClassElementName, PropertyName Syntax (class declaration module default export)
esid: prod-ClassElement
features: [class-fields-public, class]
flags: [generated, module]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    ClassElementName :
      PropertyName
      PrivateName

    PropertyName :
      LiteralPropertyName
      ComputedPropertyName

    LiteralPropertyName :
      IdentifierName
      StringLiteral
      NumericLiteral

    IdentifierName ::
      IdentifierStart
      IdentifierName IdentifierPart

    IdentifierStart ::
      UnicodeIDStart
      $
      _
      \ UnicodeEscapeSequence

    IdentifierPart ::
      UnicodeIDContinue
      $
      \ UnicodeEscapeSequence
      <ZWNJ> <ZWJ>

    UnicodeIDStart ::
      any Unicode code point with the Unicode property "ID_Start"

    UnicodeIDContinue ::
      any Unicode code point with the Unicode property "ID_Continue"


    NOTE 3
    The sets of code points with Unicode properties "ID_Start" and
    "ID_Continue" include, respectively, the code points with Unicode
    properties "Other_ID_Start" and "Other_ID_Continue".

---*/


export default class {
  $;
  _;
  \u{6F};
  ℘;      // DO NOT CHANGE THE NAME OF THIS FIELD
  ZW_‌_NJ; // DO NOT CHANGE THE NAME OF THIS FIELD
  ZW_‍_J;  // DO NOT CHANGE THE NAME OF THIS FIELD
}
