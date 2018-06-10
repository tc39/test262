// Copyright (c) 2018 Mike Pennisi.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-22-s
description: >
    Strict Mode - Function code of a FunctionExpression contains Use
    Strict Directive which appears at the start of the block
negative:
  phase: early
  type: SyntaxError
flags: [noStrict]
---*/

(function() {
  "use strict";

  var static;
});
