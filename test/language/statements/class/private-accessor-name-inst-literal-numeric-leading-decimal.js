// This file was procedurally generated from the following sources:
// - src/accessor-names/literal-numeric-leading-decimal.case
// - src/accessor-names/default/cls-private-decl-inst.template
/*---
description: Computed values as accessor property names (numeric literal with leading decimal point) (Class declaration, private instance method)
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
  get #.1() { return 'get string'; }
  set #.1(param) { stringSet = param; }

  getPrivateReference() {
    return this.#'0.1';
  }

  setPrivateReference(value) {
    this.#'0.1' = value;
  }
};

var inst = C();

assert.sameValue(inst.getPrivateReference(), 'get string');

inst.setPrivateReference('set string');
assert.sameValue(stringSet, 'set string');
