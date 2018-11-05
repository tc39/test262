// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-for-statement
description: "'for(var eval = 42 in ...) {...}' throws SyntaxError in strict mode"
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

for (var eval = 42 in null) {}
