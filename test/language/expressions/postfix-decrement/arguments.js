// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.3.2-2-1-s
esid: sec-postfix-decrement-operator
description: >
    Strict Mode - SyntaxError is thrown if the identifier 'arguments'
    appear as a PostfixExpression(arguments--)
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

arguments--;
