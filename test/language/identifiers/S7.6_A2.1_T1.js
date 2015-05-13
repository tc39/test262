// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierPart :: IdentifierStart"
es5id: 7.6_A2.1_T1
description: "IdentifierStart :: UnicodeLetter"
---*/

var result;

//CHECK#1
try {
  var identifier = "x" + "x";     
  eval("var " + identifier + "=1; result = xx");
  if (result !== 1) {
    $ERROR('#1.1: var identifier = "x" + "x"; eval("var " + identifier + "=1; result = xx"); result === 1. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#1.2: var identifier = "x" + "x"; eval("var " + identifier + "=1; result = xx"); result === 1. Actual: ' + (result));
}

//CHECK#2
try {
  var identifier = "x" + String.fromCharCode(0x0078);     
  eval("var " + identifier + "=2; result = xx");
  if (result !== 2) {
    $ERROR('#2.1: var identifier = "x" + String.fromCharCode(0x0078); eval("var " + identifier + "=2; result = xx"); result === 2. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#2.2: var identifier = "x" + String.fromCharCode(0x0078); eval("var " + identifier + "=2; result = xx"); result === 2. Actual: ' + (result));
}

//CHECK#3
try {
  var identifier = String.fromCharCode(0x0078) + String.fromCharCode(0x0078);     
  eval("var " + identifier + "=3; result = xx");
  if (result !== 3) {
    $ERROR('#3.1: var identifier = String.fromCharCode(0x0078) + String.fromCharCode(0x0078); eval("var " + identifier + "=3; result = xx"); result === 3. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#3.2: var identifier = String.fromCharCode(0x0078) + String.fromCharCode(0x0078); eval("var " + identifier + "=3; result = xx"); result === 3. Actual: ' + (result));
}

//CHECK#4
try {
  var identifier = "$" + String.fromCharCode(0x0078);     
  eval("var " + identifier + "=4; result = $x");
  if (result !== 4) {
    $ERROR('#4.1: var identifier = "$" + String.fromCharCode(0x0078); eval("var " + identifier + "=4; result = $x"); result === 4. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#4.2: var identifier = "$" + String.fromCharCode(0x0078); eval("var " + identifier + "=4; result = $x"); result === 4. Actual: ' + (result));
}

//CHECK#5
try {
  var identifier = "_" + String.fromCharCode(0x0078);     
  eval("var " + identifier + "=5; result = _x");
  if (result !== 5) {
    $ERROR('#5.1: var identifier = "_" + String.fromCharCode(0x0078); eval("var " + identifier + "=5; result = _x"); result === 5. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#5.2: var identifier = "_" + String.fromCharCode(0x0078); eval("var " + identifier + "=5; result = _x"); result === 5. Actual: ' + (result));
}

//CHECK#6
try {
  var \u0078x = 6;
  if (xx !== 6) {
    $ERROR('#6.1: var \\u0078x = 1; xx === 6. Actual: ' + (xx));
  }
} catch (e) {
  $ERROR('#6.2: var \\u0078x = 1; xx === 6. Actual: ' + (xx));
}
