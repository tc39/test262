// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T7;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is {toString:void 0, valueOf:function(){throw "invalof";} } and flags is "i";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T7",

path: "15_Native\15.10_RegExp_Objects\15.10.4_The_RegExp_Constructor\S15.10.4.1_A8_T7.js",

assertion: "let P be ToString(pattern) and let F be ToString(flags)",

description: "Pattern is {toString:void 0, valueOf:function(){throw \"invalof\";} } and flags is \"i\"",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp({toString:void 0, valueOf:function(){throw "invalof";}}) throw "invalof". Actual: ' + (new RegExp({toString:void 0, valueOf:function(){throw "invalof";}})));
} catch (e) {
	if (e !== "invalof" ) {
		$ERROR('#1.2: new RegExp({toString:void 0, valueOf:function(){throw "invalof";}}) throw "invalof". Actual: ' + (e));
	}
}


 }
});

