
/*---
esid: sec-grammar-notation
description: >
  The `using` contextual keyword must not contain Unicode escape sequences.
info: |
  Grammar Notation

  In the ECMAScript grammars, some terminal symbols are shown in fixed-width
  font. These are to appear in a source text exactly as written. [...] A code
  point in a terminal symbol cannot be expressed by a \ UnicodeEscapeSequence.

  UsingDeclaration[In, Yield, Await] :
    using [no LineTerminator here] BindingList[?In, ?Yield, ?Await, ~Pattern] ;

  An escaped `using` is an IdentifierReference, so it cannot start a
  UsingDeclaration. The following `x` is on the same line, so no semicolon is
  inserted before it.
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

{
  \u0075sing x = null;
}
