// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-privatename-in-computed-property-missing.case
// - src/class-elements/syntax/invalid/cls-expr-elements-invalid-syntax.template
/*---
description: Use of udeclared PrivateName in ComputedProperty is a syntax error (class expression)
esid: prod-ClassElement
features: [class-fields-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassTail : ClassHeritage { ClassBody }
      1. Let lex be the LexicalEnvironment of the running execution context.
      2. Let classScope be NewDeclarativeEnvironment(lex).
      3. Let classScopeEnvRec be classScope's EnvironmentRecord.
      ...
      15. Set the running execution context's LexicalEnvironment to classScope.
      16. Set the running execution context's PrivateEnvironment to classPrivateEnvironment.
      ...
      27. For each ClassElement e in order from elements
        a. If IsStatic of e is false, then
          i. Let field be the result of ClassElementEvaluation for e with arguments proto and false.
      ...

---*/


$DONOTEVALUATE();

var C = class {
  [this.#f] = 'Test262'
};
