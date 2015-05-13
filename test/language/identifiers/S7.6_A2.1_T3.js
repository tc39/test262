// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierPart :: IdentifierStart"
es5id: 7.6_A2.1_T3
description: "IdentifierStart :: _"
---*/

var result;

//CHECK#1
try {
  var identifier = "x" + "_";     
  eval("var " + identifier + "=1; result = x_");
  if (result !== 1) {
    $ERROR('#1.1: var identifier = "x" + "_"; eval("var " + identifier + "=1; result = x_"); result === 1. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#1.2: var identifier = "x" + "_"; eval("var " + identifier + "=1; result = x_"); result === 1. Actual: ' + (result));
}

//CHECK#2
try {
  var identifier = String.fromCharCode(0x0078) + "_";     
  eval("var " + identifier + "=2; result = x_");
  if (result !== 2) {
    $ERROR('#2.1: var identifier = String.fromCharCode(0x0078) + "_"; eval("var " + identifier + "=2; result = x_"); result === 2. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#2.2: var identifier = String.fromCharCode(0x0078) + "_"; eval("var " + identifier + "=2; result = x_"); result === 2. Actual: ' + (result));
}

//CHECK#3
try {
  var identifier = "_" + "_";     
  eval("var " + identifier + "=3; result = __");
  if (result !== 3) {
    $ERROR('#3.1: var identifier = "_" + "_"; eval("var " + identifier + "=3; result = __"); result === 3. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#3.2: var identifier = "_" + "_"; eval("var " + identifier + "=3; result = __"); result === 3. Actual: ' + (result));
}

//CHECK#4
try {
  var identifier = String.fromCharCode(0x005F) + String.fromCharCode(0x005F);     
  eval("var " + identifier + "=4; result = __");
  if (result !== 4) {
    $ERROR('#4.1: var identifier = String.fromCharCode(0x005F) + String.fromCharCode(0x005F); eval("var " + identifier + "=4; result = __"); result === 4. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#4.2: var identifier = String.fromCharCode(0x005F) + String.fromCharCode(0x005F); eval("var " + identifier + "=4; result = __"); result === 4. Actual: ' + (result));
}

//CHECK#5
try {
  var identifier = "_" + "_";     
  eval("var " + identifier + "=5; result = __");
  if (result !== 5) {
    $ERROR('#5.1: var identifier = "_" + "_"; eval("var " + identifier + "=5; result = __"); result === 5. Actual: ' + (result));
  }
} catch (e) {
  $ERROR('#5.2: var identifier = "_" + "_"; eval("var " + identifier + "=5; result = __"); result === 5. Actual: ' + (result));
}

//CHECK#6
try {
  var \u0078_ = 6;
  if (x_ !== 6) {
    $ERROR('#6.1: var \\u0078_ = 1; x_ === 6. Actual: ' + (x_));
  }
} catch (e) {
  $ERROR('#6.2: var \\u0078_ = 1; x_ === 6. Actual: ' + (x_));
}
