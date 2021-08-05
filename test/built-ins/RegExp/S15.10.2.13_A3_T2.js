// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Inside a CharacterClass, \b means the backspace character
es5id: 15.10.2.13_A3_T2
description: Execute /c[\b]{3}d/.exec("abc\b\b\bdef") and check results
---*/

var __executed = /c[\b]{3}d/.exec("abc\b\b\bdef");

var __expected = ["c\b\b\bd"];
__expected.index = 2;
__expected.input = "abc\b\b\bdef";

//CHECK#1
if (__executed.length !== __expected.length) {
	throw new Test262Error('#1: __executed = /c[\\b]{3}d/.exec("abc\\b\\b\\bdef"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	throw new Test262Error('#2: __executed = /c[\\b]{3}d/.exec("abc\\b\\b\\bdef"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	throw new Test262Error('#3: __executed = /c[\\b]{3}d/.exec("abc\\b\\b\\bdef"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		throw new Test262Error('#4: __executed = /c[\\b]{3}d/.exec("abc\\b\\b\\bdef"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
