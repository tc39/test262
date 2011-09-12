// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionExpression within a "do-while" statement is allowed, but no function with the given name will appear in the global context
 *
 * @section 12.6.1, 13
 * @path 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A10.js
 * @description Also this a test on FunctionExpression
 */

var check = 0;
do {    
  if(typeof(f) === "function"){
    check = -1;        
    break; 
  } else {
    check = 1;        
    break; 
  }
} while(function f(){});

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (check !== 1) {
	$ERROR('#1: FunctionExpression within a "do-while" statement is allowed, but no function with the given name will appear in the global context');
}
//
//////////////////////////////////////////////////////////////////////////////

