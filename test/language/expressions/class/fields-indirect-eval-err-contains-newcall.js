// This file was procedurally generated from the following sources:
// - src/class-fields/eval-err-contains-newcall.case
// - src/class-fields/initializer-eval/cls-expr-fields-indirect-eval.template
/*---
description: error if `new.call` in StatementList of eval (indirect eval)
esid: sec-performeval-rules-in-initializer
features: [class-fields]
flags: [generated]
info: |
    Additional Early Error Rules for Eval Inside Initializer
    These static semantics are applied by PerformEval when a direct eval call occurs inside a class field initializer.
    ScriptBody : StatementList

      ...
      The remaining eval rules apply as outside a constructor, inside a method, and inside a function.

    Additional Early Error Rules for Eval Outside Functions
    These static semantics are applied by PerformEval when a direct eval call occurs outside of any function.
    ScriptBody:StatementList

      It is a Syntax Error if StatementList Contains NewTarget.

---*/


var executed = false;
C = class {
  x = (0, eval)('executed = true; new.call;');
}

assert.throws(SyntaxError, function() {
  new C();
});

assert.sameValue(executed, true);
