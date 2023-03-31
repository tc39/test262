// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/should-not-case-fold-i.case
// - src/regexp-modifiers/flags-syntax-error/arithmetic-modifiers-constructed.template
/*---
description: Code points other than "i", "m", "s" should not be case folded to "i", "m", or "s" (arithmetic regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
flags: [generated]
info: |
    Atom :: ( ? RegularExpressionFlags - RegularExpressionFlags : Disjunction )
    ...

---*/

assert.throws(SyntaxError, function () {
  RegExp("(?-I:a)", "i");
}, 'RegExp("(?-I:a)", "i"): ');
