// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A2;
* @section: 12.6.3;
* @assertion: While evaluating "for (ExpressionNoIn; Expression; Expression) Statement", ExpressionNoIn is evaulated first;
* @description: Using "(function(){throw "NoInExpression"})()" as ExpressionNoIn;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A2",

path: "12_Statement\12.6_Iteration_Statements\12.6.3_The_for_Statement\S12.6.3_A2.js",

assertion: "While evaluating \"for (ExpressionNoIn; Expression; Expression) Statement\", ExpressionNoIn is evaulated first",

description: "Using \"(function(){throw \"NoInExpression\"})()\" as ExpressionNoIn",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	for((function(){throw "NoInExpression";})(); (function(){throw "FirstExpression";})(); (function(){throw "SecondExpression";})()) {
		var in_for = "reached";
	}
	$ERROR('#1: (function(){throw "NoInExpression";})() lead to throwing exception');
} catch (e) {
	if (e !== "NoInExpression") {
		$ERROR('#1: When for (ExpressionNoIn ; Expression ; Expression) Statement is evaluated ExpressionNoIn evaluates first');
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (in_for !== undefined) {
	$ERROR('#2: in_for === undefined. Actual:  in_for ==='+ in_for  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

