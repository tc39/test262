// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/both-empty.case
// - src/regexp-modifiers/flags-syntax-error/arithmetic-modifiers-constructed.template
/*---
description: It is a Syntax Error if the source text matched by the first RegularExpressionFlags and the source text matched by the second RegularExpressionFlags are both empty. (arithmetic regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
flags: [generated]
info: |
    Atom :: ( ? RegularExpressionFlags - RegularExpressionFlags : Disjunction )
    ...

---*/

assert.throws(SyntaxError, function () {
  RegExp("(?-:a)", "");
}, 'RegExp("(?-:a)", ""): ');
