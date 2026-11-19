
/*---
esid: sec-grammar-notation
description: >
  The `using` contextual keyword in a for-of head must not contain Unicode
  escape sequences.
info: |
  Grammar Notation

  In the ECMAScript grammars, some terminal symbols are shown in fixed-width
  font. These are to appear in a source text exactly as written. [...] A code
  point in a terminal symbol cannot be expressed by a \ UnicodeEscapeSequence.

  ForInOfStatement[Yield, Await, Return] :
    for ( [lookahead ∉ { let, async of }] LeftHandSideExpression[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
    for ( [lookahead ≠ using of] ForDeclaration[?Yield, ?Await, +Using] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]

  ForDeclaration[Yield, Await, Using] :
    [+Using] using [no LineTerminator here] ForBinding[?Yield, ?Await, ~Pattern]

  An escaped `using` is an IdentifierReference, so it cannot start a
  ForDeclaration. It is parsed as the LeftHandSideExpression, which must be
  followed by `of`.
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

for (\u0075sing x of []) ;
