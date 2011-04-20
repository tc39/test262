// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A1_T7;
* @section: 15.10.6.2;
* @assertion: RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and 
* returns an Array object containing the results of the match, or null if the string did not match;
* @description: String is {toString:function(){throw "intostr";}} and RegExp is /[a-z]/;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A1_T7",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.2_RegExp.prototype.exec\S15.10.6.2_A1_T7.js",

assertion: "RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and",

description: "String is {toString:function(){throw \"intostr\";}} and RegExp is /[a-z]/",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: /[a-z]/.exec({toString:function(){throw "intostr"}}) throw "intostr". Actual: ' + (/[a-z]/.exec({toString:function(){throw "intostr"}})));
} catch (e) {
	if (e !== "intostr") {
		$ERROR('#1.2: /[a-z]/.exec({toString:function(){throw "intostr"}}) throw "intostr". Actual: ' + (e));
	}
}


 }
});

