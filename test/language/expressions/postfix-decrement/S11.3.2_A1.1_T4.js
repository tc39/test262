// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Line Terminator between LeftHandSideExpression and "--" is not allowed
es5id: 11.3.2_A1.1_T4
description: Checking Line separator
---*/

assert.throws(SyntaxError, function() {
  eval("var x = 1; x\u2029--");
});
