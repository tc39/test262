// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierStart :: $"
es5id: 7.6_A1.2_T3
description: The $ as unicode character \u0024
---*/

//CHECK#1
var identifier = String.fromCharCode(0x0024);
var result;
eval("var " + identifier + "=1; result = " + identifier);
if (result !== 1) {
  $ERROR('#1: var identifier = String.fromCharCode(0x0024); eval("var " + identifier + "=1; result = " + identifier); result === 1');
}

//CHECK#2
if ("$" !== String.fromCharCode(0x0024)) {
  $ERROR('#2: "$" === String.fromCharCode(0x0024)');
}
