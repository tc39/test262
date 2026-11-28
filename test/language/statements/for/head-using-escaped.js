// Copyright (C) 2026 Huáng Jùnliàng. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-grammar-notation
description: >
  The `using` contextual keyword in a for statement head must not contain
  Unicode escape sequences.
info: |
  Grammar Notation

  In the ECMAScript grammars, some terminal symbols are shown in fixed-width
  font. These are to appear in a source text exactly as written. [...] A code
  point in a terminal symbol cannot be expressed by a \ UnicodeEscapeSequence.

  ForStatement[Yield, Await, Return] :
    for ( [lookahead ≠ let [] Expression[~In, ?Yield, ?Await]? ; Expression[+In, ?Yield, ?Await]? ; Expression[+In, ?Yield, ?Await]? ) Statement[?Yield, ?Await, ?Return]
    for ( LexicalDeclaration[~In, ?Yield, ?Await] Expression[+In, ?Yield, ?Await]? ; Expression[+In, ?Yield, ?Await]? ) Statement[?Yield, ?Await, ?Return]

  UsingDeclaration[In, Yield, Await] :
    using [no LineTerminator here] BindingList[?In, ?Yield, ?Await, ~Pattern] ;

  An escaped `using` is an IdentifierReference, so it cannot start a
  UsingDeclaration. It is parsed as the first Expression, which must be
  followed by `;`.
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

for (\u0075sing x = null; ; ) break;
