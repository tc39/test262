// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/should-not-unicode-case-fold-s.case
// - src/regexp-modifiers/flags-syntax-error/modifiers-literal.template
/*---
description: Code points other than "i", "m", "s" should not be case-folded to "i", "m", or "s" (regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Atom :: ( ? RegularExpresisonFlags : Disjunction )
    It is a Syntax Error if the source text matched by RegularExpressionFlags contains any code points other than "i", "m", "s", or if it contains the same code point more than once.

---*/

$DONOTEVALUATE();

/(?ſ:a)//*{ global-modifiers }*/;
