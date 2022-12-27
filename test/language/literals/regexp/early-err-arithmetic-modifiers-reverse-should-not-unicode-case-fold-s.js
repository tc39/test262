// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/should-not-unicode-case-fold-s.case
// - src/regexp-modifiers/flags-syntax-error/arithmetic-modifiers-literal-reversed.template
/*---
description: Code points other than "i", "m", "s" should not be case-folded to "i", "m", or "s" (arithmetic regular expression flags)
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

/(?ſ-:a)//*{ global-modifiers }*/;
