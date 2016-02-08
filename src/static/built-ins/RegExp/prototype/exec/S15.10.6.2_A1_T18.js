// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and
    returns an Array object containing the results of the match, or null if the string did not match
es5id: 15.10.6.2_A1_T18
description: String is undefined and RegExp is /nd|ne/
---*/

var __executed = /nd|ne/.exec(undefined);

var __expected = ["nd"];
__expected.index=1;
__expected.input="undefined";

//CHECK#0
if ((__executed instanceof Array) !== true) {
	$ERROR('#0: __executed = /nd|ne/.exec(undefined); (__executed instanceof Array) === true');
}

//CHECK#1
if (__executed.length !== __expected.length) {
  $ERROR('#1: __executed = /nd|ne/.exec(undefined); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
  $ERROR('#2: __executed = /nd|ne/.exec(undefined); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
  $ERROR('#3: __executed = /nd|ne/.exec(undefined); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__executed[index] !== __expected[index]) {
    $ERROR('#4: __executed = /nd|ne/.exec(undefined); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
  }
}
