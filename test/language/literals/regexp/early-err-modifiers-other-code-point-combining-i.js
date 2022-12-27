// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/other-code-point-combining-i.case
// - src/regexp-modifiers/flags-syntax-error/modifiers-literal.template
/*---
description: Contain code points other than "i", "m", "s" (Regular expression flags)
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

/(?iͥ:a)//*{ global-modifiers }*/;
