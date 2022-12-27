/*---
description: Regular expression modifiers should not parse without the colon.
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
negative:
  phase: parse
  type: SyntaxError
info: |
    Atom :: ( ? RegularExpressionFlags - RegularExpressionFlags : Disjunction )
    ...
---*/

$DONOTEVALUATE();

/(?ms-i)/;
