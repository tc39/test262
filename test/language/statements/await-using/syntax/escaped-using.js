// Copyright (C) 2026 Huáng Jùnliàng. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-grammar-notation
description: >
  The `using` contextual keyword of an `await using` declaration must not
  contain Unicode escape sequences.
info: |
  Grammar Notation

  In the ECMAScript grammars, some terminal symbols are shown in fixed-width
  font. These are to appear in a source text exactly as written. [...] A code
  point in a terminal symbol cannot be expressed by a \ UnicodeEscapeSequence.

  AwaitUsingDeclaration[In, Yield] :
    CoverAwaitExpressionAndAwaitUsingDeclarationHead[?Yield] [no LineTerminator here] BindingList[?In, ?Yield, +Await, ~Pattern] ;

  AwaitUsingDeclarationHead :
    await [no LineTerminator here] using

  `await` followed by an escaped `using` is an AwaitExpression whose operand
  is an IdentifierReference. It cannot be refined to an
  AwaitUsingDeclarationHead, so it cannot start an AwaitUsingDeclaration. The
  following `x` is on the same line, so no semicolon is inserted before it.
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

async function f() {
  await \u0075sing x = null;
}
