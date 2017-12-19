// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check If Statement for automatic semicolon insertion
es5id: 7.9_A11_T8
description: Use if (false) {x = 1}; \n else x=-1 and check x
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

//CHECK#1
var x = 0;
if (false) {x = 1};
else x = -1
if (x !== -1) {
  $ERROR('#1: Check If Statement for automatic semicolon insertion');
}
