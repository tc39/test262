// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Single line comment can contain NO-BREAK SPACE (U+00A0)
description: Use NO-BREAK SPACE(\u00A0)
---*/

// CHECK#1
eval("//\u00A0 single line \u00A0 comment \u00A0");

//CHECK#2
var x = 0;
eval("//\u00A0 single line \u00A0 comment \u00A0 x = 1;");
if (x !== 0) {
  $ERROR('#1: var x = 0; eval("//\\u00A0 single line \\u00A0 comment \\u00A0 x = 1;"); x === 0. Actual: ' + (x));
}
