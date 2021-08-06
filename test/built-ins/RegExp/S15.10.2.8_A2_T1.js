// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The form (?! Disjunction ) specifies a zero-width negative lookahead.
    In order for it to succeed, the pattern inside Disjunction must fail to match at the current position.
    The current position is not advanced before matching the sequel
es5id: 15.10.2.8_A2_T1
description: >
    Execute /(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac") and check
    results
---*/

var __executed = /(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac");

var __expected = ["baaabaac", "ba", undefined, "abaac"];
__expected.index = 0;
__expected.input = "baaabaac";

//CHECK#1
if (__executed.length !== __expected.length) {
	throw new Test262Error('#1: __executed = /(.*?)a(?!(a+)b\\2c)\\2(.*)/.exec("baaabaac"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	throw new Test262Error('#2: __executed = /(.*?)a(?!(a+)b\\2c)\\2(.*)/.exec("baaabaac"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	throw new Test262Error('#3: __executed = /(.*?)a(?!(a+)b\\2c)\\2(.*)/.exec("baaabaac"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		throw new Test262Error('#4: __executed = /(.*?)a(?!(a+)b\\2c)\\2(.*)/.exec("baaabaac"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
