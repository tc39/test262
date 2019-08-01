// Copyright (c) 2018 Mike Pennisi.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: use-strict-directive
description: >
    Strict Mode - Function code of a FunctionDeclaration contains Use
    Strict Directive which appears at the start of the block
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();

function fun() {
  "use strict";
  var static;
}
