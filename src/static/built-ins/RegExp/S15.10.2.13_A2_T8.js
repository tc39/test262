// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production CharacterClass :: [ ^ ClassRanges ] evaluates by
    evaluating ClassRanges to  obtain a CharSet and returning that CharSet
    and the boolean true
es5id: 15.10.2.13_A2_T8
description: Execute /[^]/.exec("abc#$%def%&*@ghi") and check results
---*/

var __executed = /[^]/.exec("abc#$%def%&*@ghi");

var __expected = ["a"];
__expected.index = 0;
__expected.input = "abc#$%def%&*@ghi";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /[^]/.exec("abc#$%def%&*@ghi"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /[^]/.exec("abc#$%def%&*@ghi"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /[^]/.exec("abc#$%def%&*@ghi"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /[^]/.exec("abc#$%def%&*@ghi"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
