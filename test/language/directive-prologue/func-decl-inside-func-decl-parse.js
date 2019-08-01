// Copyright (c) 2018 Mike Pennisi.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: use-strict-directive
description: >
    Strict Mode - Function code that is part of a FunctionDeclaration
    is strict function code if FunctionDeclaration is contained in use
    strict
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();

function testcase() {
  "use strict";
  function fun() {
    var static;
  }
}
