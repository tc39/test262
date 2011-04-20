// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A4;
* @section: 12.5;
* @assertion: When the production "IfStatement: if ( Expression ) Statement else Statement" is evaluated, Statement(s) is(are) evaluated second;
* @description: The first statement is "(function(){throw "instatement"})()";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A4",

path: "12_Statement\12.5_The_if_Statement\S12.5_A4.js",

assertion: "When the production \"IfStatement: if ( Expression ) Statement else Statement\" is evaluated, Statement(s) is(are) evaluated second",

description: "The first statement is \"(function(){throw \"instatement\"})()\"",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	if (true) (function(){throw "instatement"})();
	$FAIL("#1 failed")
} catch (e) {
	if (e !== "instatement") {
		$ERROR('#1: Exception === "instatement". Actual:  Exception ==='+ e);
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try {
	if (false) (function(){throw "truebranch"})(); (function(){throw "missbranch"})();
	$FAIL("#2 failed")
} catch (e) {
	if (e !== "missbranch") {
		$ERROR('#2: Exception === "missbranch". Actual:  Exception ==='+ e);
	}
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

