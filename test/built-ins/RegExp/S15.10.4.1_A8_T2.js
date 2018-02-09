// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: let P be ToString(pattern) and let F be ToString(flags)
es5id: 15.10.4.1_A8_T2
description: Pattern is function(){return "a|b|[]";}() and flags is "ig"
---*/

var __re = new RegExp(function(){return "a|b|[]";}(),"ig");

//CHECK#1
if (__re.ignoreCase !== true) {
	$ERROR('#1: __re = new RegExp(function(){return "a|b|[]"; __re.ignoreCase === true. Actual: ' + (__re.ignoreCase));
}

//CHECK#2
if (__re.multiline !== false) {
	$ERROR('#2: __re = new RegExp(function(){return "a|b|[]"; __re.multiline === false. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== true) {
	$ERROR('#3: __re = new RegExp(function(){return "a|b|[]"; __re.global === true. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.lastIndex !== 0) {
	$ERROR('#4: __re = new RegExp(function(){return "a|b|[]"; __re.lastIndex === 0. Actual: ' + (__re.lastIndex));
}

//CHECK#5
if (typeof __re.source === "undefined") {
	$ERROR('#5: __re = new RegExp(function(){return "a|b|[]"; typeof __re.source !== "undefined"');
}
