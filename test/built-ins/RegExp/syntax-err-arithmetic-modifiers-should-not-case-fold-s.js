// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/should-not-case-fold-s.case
// - src/regexp-modifiers/flags-syntax-error/arithmetic-modifiers-constructed.template
/*---
description: Contain code points other than "i", "m", "s" (Arithmetic regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
flags: [generated]
info: |
    Atom :: ( ? RegularExpressionFlags - RegularExpressionFlags : Disjunction )
    ...

---*/

assert.throws(SyntaxError, function () {
  RegExp("(?-S:a)", "i");
}, 'RegExp("(?-S:a)", "i"): ');
