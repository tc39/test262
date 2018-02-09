// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: RegExp instance type is RegExp
es5id: 15.10.7_A3_T2
description: >
    Checking type of RegExp instance with operators typeof, instanceof
    and check it constructor.  RegExp instance is new RegExp
---*/

var __re = new RegExp;

//CHECK#1
if (typeof __re !== "object") {
	$ERROR('#1: __re = new RegExp; typeof __re === "object". Actual: ' + (typeof __re));
}

//CHECK#1
if (__re.constructor !== RegExp) {
	$ERROR('#2: __re = new RegExp; __re.constructor === RegExp. Actual: ' + (__re.constructor));
}

//CHECK#3
if ((__re instanceof RegExp) !== true) {
	$ERROR('#3: __re = new RegExp; (__re instanceof RegExp) === true');
}
