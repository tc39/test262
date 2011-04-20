// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.6_A6_T2;
* @section: 11.8.6;
* @assertion: Only Function objects implement [[HasInstance]] and can be proper ShiftExpression for the "instanceof" operator consequently;
* @description: Checking Math case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A6_T2",

path: "11_Expressions\11.8_Relational_Operators\11.8.6_The_instanceof_operator\S11.8.6_A6_T2.js",

assertion: "Only Function objects implement [[HasInstance]] and can be proper ShiftExpression for the \"instanceof\" operator consequently",

description: "Checking Math case",

test: function testcase() {
   //CHECK#1
try{
	1 instanceof Math;
	$ERROR('#1: 1 instanceof Math throw TypeError');
}
catch(e){
  if (e  instanceof TypeError !== true) { 
    $ERROR('#1: 1 instanceof Math throw TypeError');
  }  
}

 }
});

