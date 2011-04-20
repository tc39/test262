// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A1_T15;
* @section: 15.10.6.3;
* @assertion: Equivalent to the expression RegExp.prototype.exec(string) != null;
* @description: RegExp is /LS/i and tested string is {toString:function(){return false;}};
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A1_T15",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.3_RegExp.prototype.test\S15.10.6.3_A1_T15.js",

assertion: "Equivalent to the expression RegExp.prototype.exec(string) != null",

description: "RegExp is /LS/i and tested string is {toString:function(){return false;}}",

test: function testcase() {
   var __string = {toString:function(){return false;}};
__re = /LS/i;

//CHECK#0
if (__re.test(__string) !== (__re.exec(__string) !== null)) {
	$ERROR('#0: var __string = {toString:function(){return false;}}; __re = /LS/i; __re.test(__string) === (__re.exec(__string) !== null)');
}


 }
});

