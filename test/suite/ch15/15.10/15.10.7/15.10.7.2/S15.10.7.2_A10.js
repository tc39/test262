// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp instance global property has the attribute ReadOnly
es5id: 15.10.7.2_A10
description: Checking if varying the global property fails
includes: [$FAIL.js]
---*/

__re = /^|^/;

//CHECK#1
if (__re.hasOwnProperty('global') !== true) {
  $FAIL('#1: __re = /^|^/; __re.hasOwnProperty(\'global\') === true');
}

__obj = __re.global;

__re.global = "shifted";

//CHECK#2
if (__re.global !== __obj) {
  $ERROR('#2: __re = /^|^/; __obj = __re.global; __re.global = "shifted"; __re.global === __obj. Actual: ' + (__re.global));
}
