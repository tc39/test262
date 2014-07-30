// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp instance ignoreCase property has the attribute ReadOnly
es5id: 15.10.7.3_A10
description: Checking if varying the ignoreCase property fails
includes: [$FAIL.js]
---*/

__re = /a|b|c/;

//CHECK#1
if (__re.hasOwnProperty('ignoreCase') !== true) {
  $FAIL('#1: __re = /a|b|c/; __re.hasOwnProperty(\'ignoreCase\') === true');
}

__obj = __re.ignoreCase;

__re.ignoreCase = "shifted";

//CHECK#2
if (__re.ignoreCase !== __obj) {
  $ERROR('#2: __re = /a|b|c/; __obj = __re.ignoreCase; __re.ignoreCase = "shifted"; __re.ignoreCase === __obj. Actual: ' + (__re.ignoreCase));
}
