// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/add-remove-s-escape.case
// - src/regexp-modifiers/flags-syntax-error/arithmetic-modifiers-literal-reversed.template
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

/(?s-\u{0073}:a)//*{ global-modifiers }*/;
