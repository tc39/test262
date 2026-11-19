
/*---
esid: sec-grammar-notation
description: >
  The `await` keyword of an `await using` declaration must not contain Unicode
  escape sequences.
info: |
  Grammar Notation

  In the ECMAScript grammars, some terminal symbols are shown in fixed-width
  font. These are to appear in a source text exactly as written. [...] A code
  point in a terminal symbol cannot be expressed by a \ UnicodeEscapeSequence.

  AwaitUsingDeclaration[In, Yield] :
    CoverAwaitExpressionAndAwaitUsingDeclarationHead[?Yield] [no LineTerminator here] BindingList[?In, ?Yield, +Await, ~Pattern] ;

  CoverAwaitExpressionAndAwaitUsingDeclarationHead[Yield] :
    await UnaryExpression[?Yield, +Await]

  An escaped `await` cannot match the `await` terminal symbol, so it cannot
  start an AwaitUsingDeclaration.
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

async function f() {
  \u0061wait using x = null;
}
