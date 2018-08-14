// This file was procedurally generated from the following sources:
// - src/accessor-names/literal-numeric-exponent.case
// - src/accessor-names/default/cls-private-decl-static.template
/*---
description: Computed values as accessor property names (numeric literal in exponent notation) (Class declaration, static method)
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
  static get #1E+9() { return 'get string'; }
  static set #1E+9(param) { stringSet = param; }

  static getPrivateReference() {
    return this.#'1000000000';
  }

  static setPrivateReference(value) {
    this.#'1000000000' = value;
  }
}

assert.sameValue(C.getPrivateReference(), 'get string');

C.setPrivateReference('set string');
assert.sameValue(stringSet, 'set string');

