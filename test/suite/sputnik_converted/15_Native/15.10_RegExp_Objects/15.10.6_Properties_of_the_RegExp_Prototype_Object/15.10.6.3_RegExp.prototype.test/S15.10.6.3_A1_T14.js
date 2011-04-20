// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A1_T14;
* @section: 15.10.6.3;
* @assertion: Equivalent to the expression RegExp.prototype.exec(string) != null;
* @description: RegExp is /AL|se/ and tested string is new Boolean;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A1_T14",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.3_RegExp.prototype.test\S15.10.6.3_A1_T14.js",

assertion: "Equivalent to the expression RegExp.prototype.exec(string) != null",

description: "RegExp is /AL|se/ and tested string is new Boolean",

test: function testcase() {
   var __string = new Boolean;
__re = /AL|se/;

//CHECK#0
if (__re.test(__string) !== (__re.exec(__string) !== null)) {
	$ERROR('#0: var __string = new Boolean;__re = /AL|se/; __re.test(__string) === (__re.exec(__string) !== null)');
}


 }
});

