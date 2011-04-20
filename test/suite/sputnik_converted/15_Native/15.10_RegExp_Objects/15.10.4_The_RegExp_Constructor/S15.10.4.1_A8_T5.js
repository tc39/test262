// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T5;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is new Object("abc{1}") and flags is {toString:function(){return "";}};
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T5",

path: "15_Native\15.10_RegExp_Objects\15.10.4_The_RegExp_Constructor\S15.10.4.1_A8_T5.js",

assertion: "let P be ToString(pattern) and let F be ToString(flags)",

description: "Pattern is new Object(\"abc{1}\") and flags is {toString:function(){return \"\";}}",

test: function testcase() {
   __re = new RegExp(new Object("abc{1}"), {toString:function(){return "";}});

//CHECK#1
if (__re.ignoreCase !== false) {
	$ERROR('#1: __re = new RegExp(new Object("abc{1}"), {toString:function(){return ""; __re.ignoreCase === false. Actual: ' + (__re.ignoreCase));
}

//CHECK#2
if (__re.multiline !== false) {
	$ERROR('#2: __re = new RegExp(new Object("abc{1}"), {toString:function(){return ""; __re.multiline === false. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== false) {
	$ERROR('#3: __re = new RegExp(new Object("abc{1}"), {toString:function(){return ""; __re.global === false. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.lastIndex !== 0) {
	$ERROR('#4: __re = new RegExp(new Object("abc{1}"), {toString:function(){return ""; __re.lastIndex === 0. Actual: ' + (__re.lastIndex));
}

//CHECK#5
if (typeof __re.source === "undefined") {
	$ERROR('#5: __re = new RegExp(new Object("abc{1}"), {toString:function(){return ""; typeof __re.source !== "undefined"');
}


 }
});

