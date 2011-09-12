// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Blocks within "for(with var)" braces are not allowed
 *
 * @section 12.6.3
 * @path 12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A8.1_T3.js
 * @description Checking if execution of "for({var index=0; index+=1;} index++<=10; index*2;) { arr.add(""+index);}" fails
 * @negative
 */

var arr = [];

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
for({var index=0; index+=1;} index++<=10; index*2;) {	arr.add(""+index);};
//
//////////////////////////////////////////////////////////////////////////////




