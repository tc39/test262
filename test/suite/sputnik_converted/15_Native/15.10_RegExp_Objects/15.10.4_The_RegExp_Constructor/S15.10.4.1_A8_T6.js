// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T6;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is {toString:function(){throw "intostr";} } and flags is "i";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T6",

path: "15_Native\15.10_RegExp_Objects\15.10.4_The_RegExp_Constructor\S15.10.4.1_A8_T6.js",

assertion: "let P be ToString(pattern) and let F be ToString(flags)",

description: "Pattern is {toString:function(){throw \"intostr\";} } and flags is \"i\"",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp({toString:function(){throw "intostr";}}, "i") throw "intostr". Actual: ' + (new RegExp({toString:function(){throw "intostr";}}, "i")));
} catch (e) {
	if (e !== "intostr" ) {
		$ERROR('#1.2: new RegExp({toString:function(){throw "intostr";}}, "i") throw "intostr". Actual: ' + (e));
	}
}


 }
});

