// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/other-code-point-non-display-2.case
// - src/regexp-modifiers/flags-syntax-error/arithmetic-modifiers-literal.template
/*---
description: Contain code points other than "i", "m", "s" (Arithmetic regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Atom :: ( ? RegularExpressionFlags - RegularExpressionFlags : Disjunction )
    ...

---*/

$DONOTEVALUATE();

/(?-s‎:a)//*{ global-modifiers }*/;
