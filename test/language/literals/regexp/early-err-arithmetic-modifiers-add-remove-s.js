// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/add-remove-s.case
// - src/regexp-modifiers/flags-syntax-error/arithmetic-modifiers-literal.template
/*---
description: It is a Syntax Error if the any code point in the source text matched by the first RegularExpressionFlags is also contained in the source text matched by the second RegularExpressionFlags. (arithmetic regular expression flags)
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

/(?s-s:a)//*{ global-modifiers }*/;
