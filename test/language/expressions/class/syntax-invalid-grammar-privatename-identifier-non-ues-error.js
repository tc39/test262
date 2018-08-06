// This file was procedurally generated from the following sources:
// - src/class-fields/grammar-privatename-identifier-non-ues-error.case
// - src/class-fields/syntax/invalid/cls-expr-fields-invalid-syntax.template
/*---
description: Valid PrivateName Syntax (class expression)
esid: prod-ClassElement
features: [class-fields-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
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


throw "Test262: This statement should not be evaluated.";

var C = class {
  #\u0000;
};
