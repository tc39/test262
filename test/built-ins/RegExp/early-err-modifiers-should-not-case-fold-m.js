// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/should-not-case-fold-m.case
// - src/regexp-modifiers/flags-syntax-error/modifiers-constructed.template
/*---
description: Code points other than "i", "m", "s" should not be case folded to "i", "m", or "s" (regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
flags: [generated]
info: |
    Atom :: ( ? RegularExpresisonFlags : Disjunction )
    It is a Syntax Error if the source text matched by RegularExpressionFlags contains any code points other than "i", "m", "s", or if it contains the same code point more than once.

---*/

assert.throws(SyntaxError, function () {
  RegExp("(?M:a)", "i");
}, 'RegExp("(?M:a)", "i"): ');
