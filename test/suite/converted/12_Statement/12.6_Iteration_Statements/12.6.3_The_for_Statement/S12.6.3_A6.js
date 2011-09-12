// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * While evaluating "for ( ;  ; Expression) Statement", Statement is evaluated first and then Expression is evaluated
 *
 * @section 12.6.3
 * @path 12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A6.js
 * @description Using "(function(){throw "SecondExpression";})()" as an Expression
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	for(;;(function(){throw "SecondExpression";})()){
        var __in__for = "reached";
    }
    $ERROR('#1: (function(){throw "SecondExpression"}() lead to throwing exception');
} catch (e) {
	if (e !== "SecondExpression") {
		$ERROR('#1: When for ( ;  ; Expression) Statement is evaluated Statement evaluates first then Expression evaluates');
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__in__for !== "reached") {
	$ERROR('#2: __in__for === "reached". Actual:  __in__for ==='+ __in__for  );
}
//
//////////////////////////////////////////////////////////////////////////////

