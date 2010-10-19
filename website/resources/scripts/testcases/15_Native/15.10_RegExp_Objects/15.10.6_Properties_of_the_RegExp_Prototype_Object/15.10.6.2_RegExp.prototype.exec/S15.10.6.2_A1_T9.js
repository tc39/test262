// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A1_T9;
* @section: 15.10.6.2;
* @assertion: RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and 
* returns an Array object containing the results of the match, or null if the string did not match;
* @description: String is undefined variable and RegExp is /1|12/;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A1_T9",

path: "15.10.6.2",

description: "String is undefined variable and RegExp is /1|12/",

test: function testcase() {
   var __string;

//CHECK#1
__re = /1|12/;
if (__re.exec(__string) !== null) {
	$ERROR('#1: var __string; /1|12/.exec(__string) === null; function __string(){}. Actual: ' + (__re));
}

function __string(){};

 }
});

