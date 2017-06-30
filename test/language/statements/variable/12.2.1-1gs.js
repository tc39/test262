// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-1gs
description: >
    Strict Mode - SyntaxError is thrown if a VariableDeclaration
    occurs within strict code and its Identifier is eval
negative:
  phase: early
  type: SyntaxError
flags: [onlyStrict]
---*/

throw "Test262: This statement should not be evaluated.";

for (var eval in arrObj) { }
