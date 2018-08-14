// This file was procedurally generated from the following sources:
// - src/accessor-names/literal-string-unicode-escape.case
// - src/accessor-names/default/cls-private-decl-static.template
/*---
description: Computed values as accessor property names (string literal containing a Unicode escape sequence) (Class declaration, static method)
flags: [generated]
info: |
    [...]
    MethodDefinition[Yield, Await]:
        PropertyNameClassElementName [?Yield, ?Await](
          UniqueFormalParameters [~Yield, ~Await] ) {
          FunctionBody [~Yield, ~Await] }
        AsyncMethod[?Yield, ?Await]
          get PropertyName ClassElementName [?Yield, ?Await] (){
            FunctionBody [~Yield, ~Await] }
          set PropertyNameClassElementName [?Yield, ?Await] (
            PropertySetParameterList ) { FunctionBody [~Yield, ~Await] }
        AsyncMethod [Yield, Await]:
          async [no LineTerminator here] PropertyName
            ClassElementName[?Yield, ?Await](
            UniqueFormalParameters[~Yield, +Await] ) { AsyncFunctionBody }


    12.2.6.7 Runtime Semantics: Evaluation

    [...]

    ComputedPropertyName : [ AssignmentExpression ]

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let propName be ? GetValue(exprValue).
    3. Return ? ToPropertyKey(propName).
---*/

var stringSet;

class C {
  static get #'unicod\u{000065}Escape'() { return 'get string'; }
  static set #'unicod\u{000065}Escape'(param) { stringSet = param; }

  static getPrivateReference() {
    return this[#'unicodeEscape'];
  }

  static setPrivateReference(value) {
    this[#'unicodeEscape'] = value;
  }
}

assert.sameValue(C.getPrivateReference(), 'get string');

C.setPrivateReference('set string');
assert.sameValue(stringSet, 'set string');

