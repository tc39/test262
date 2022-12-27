// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/other-code-point-d.case
// - src/regexp-modifiers/flags-syntax-error/modifiers-constructed.template
/*---
description: Contain code points other than "i", "m", "s" (Regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
flags: [generated]
info: |
    Atom :: ( ? RegularExpresisonFlags : Disjunction )
    It is a Syntax Error if the source text matched by RegularExpressionFlags contains any code points other than "i", "m", "s", or if it contains the same code point more than once.

---*/

assert.throws(SyntaxError, function () {
  RegExp("(?d:a)", "");
}, 'RegExp("(?d:a)", ""): ');
