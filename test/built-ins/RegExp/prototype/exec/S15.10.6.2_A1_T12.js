// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and
    returns an Array object containing the results of the match, or null if the string did not match
es5id: 15.10.6.2_A1_T12
description: >
    String is {toString:function(){return Math.PI;}} and RegExp is
    /\.14/
---*/

var __executed = /\.14/.exec({toString:function(){return Math.PI}});

var __expected = [".14"];
__expected.index=1;
__expected.input=String(Math.PI);

//CHECK#0
if ((__executed instanceof Array) !== true) {
	throw new Test262Error('#0: __executed = /\\.14/.exec({toString:function(){return Math.PI}}); (__executed instanceof Array) === true');
}

//CHECK#1
if (__executed.length !== __expected.length) {
  throw new Test262Error('#1: __executed = /\\.14/.exec({toString:function(){return Math.PI}}); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
  throw new Test262Error('#2: __executed = /\\.14/.exec({toString:function(){return Math.PI}}); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
  throw new Test262Error('#3: __executed = /\\.14/.exec({toString:function(){return Math.PI}}); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__executed[index] !== __expected[index]) {
    throw new Test262Error('#4: __executed = /\\.14/.exec({toString:function(){return Math.PI}}); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
  }
}
