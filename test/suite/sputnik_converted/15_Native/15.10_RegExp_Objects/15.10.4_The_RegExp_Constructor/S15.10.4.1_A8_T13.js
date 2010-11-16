// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T13;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is "1" and flags is {toString:function(){throw "intostr";} };
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T13",

path: "15.10.4.1",

description: "Pattern is \"1\" and flags is {toString:function(){throw \"intostr\";} }",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp("1", {toString:function(){throw "intostr";}}) throw "intostr". Actual: ' + (new RegExp("1", {toString:function(){throw "intostr";}})));
} catch (e) {
	if (e !== "intostr" ) {
		$ERROR('#1.2: new RegExp("1", {toString:function(){throw "intostr";}}) throw "intostr". Actual: ' + (e));
	}
}


 }
});

